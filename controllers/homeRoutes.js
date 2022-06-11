const router = require('express').Router();
const { Card, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll({});
    // Serialize data so the template can read it
    const newuser = users.map((user) => user.get({ plain: true }));

    let user = {}
    if ( req.session.logged_in) {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
      });
  
      user = userData.get({ plain: true });
    }
    // Pass serialized data and session flag into template
    res.render('homepage', {
      newuser,        
      user: user,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/one-card-spread', async (req, res) => {
  res.render('one-card-spread', {
    logged_in: req.session.logged_in,
  });
});

router.get('/three-spread', async (req, res) => {
  res.render('three-spread', {
    logged_in: req.session.logged_in,
  });
});

router.get('/card/:id', async (req, res) => {
  try {
    const cardData = await Card.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const card = cardData.get({ plain: true });

    res.render('card', {
      ...card,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
    try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
      });

      const user = userData.get({ plain: true });

      res.render('profile', {
        ...user,
        logged_in: true,
        user: user,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
  });

  
router.get('/logout', (_req, res) => {
  res.render('logout');
});

module.exports = router;

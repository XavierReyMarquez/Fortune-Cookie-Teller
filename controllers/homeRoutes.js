const router = require('express').Router();
const { Card, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({});
    // Serialize data so the template can read it
    const newuser = userData.map((user) => user.get({ plain: true }));
    // Pass serialized data and session flag into template
    res.render('homepage', {
      newuser,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(cardData);
  }
});

router.get('/one-card-spread', async (req, res) => {
  res.render('one-card-spread');
});

router.get('/three-spread', async (req, res) => {
  res.render('three-spread');
});

// router.get('/card/:id', async (req, res) => {
//   try {
//     const cardData = await Card.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const card = cardData.get({ plain: true });

//     res.render('card', {
//       ...card,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true,
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

module.exports = router;

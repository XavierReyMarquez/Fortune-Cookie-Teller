const router = require('express').Router();
const { Card, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/card/:id', async (req, res) => {
  try {
    const carddata = await Card.findAll({
      include: [{ model: User }],
    });
    // convert to plain javascript
    const cards = carddata.map((card) => card.get({ plain: true }));
    // console.log(cards);
    // Pass serialized data and session flag into template
    res.render('card', {
      cards,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const carddata = await Card.findAll({
      include: [{ model: User }],
    });
    // convert to plain javascript
    const cards = carddata.map((card) => card.get({ plain: true }));
    // console.log(cards);
    // Pass serialized data and session flag into template
    res.render('card', {
      cards,
    });
  } catch {}
});

router.delete('/card', (req, res) => {
  res.send('card');
});

module.exports = router;

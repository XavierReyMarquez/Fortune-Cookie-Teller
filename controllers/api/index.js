const router = require('express').Router();
const userRoutes = require('./userRoutes');
const cardRoute = require('./cardRoute');

router.use('/users', userRoutes);
router.use('/card', cardRoute);

module.exports = router;

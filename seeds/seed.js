const sequelize = require('../config/connection');
const { User, Card } = require('../models');

const userData = require('./userData.json');
const cardData = require('./tarot-images.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const card of cardData) {
    await Card.create({
      ...card,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();

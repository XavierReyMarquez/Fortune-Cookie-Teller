const User = require('./User');
const Card = require('./Card');
const Comment = require('./Comments')

User.hasMany(Card, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Card.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Card, Comment };

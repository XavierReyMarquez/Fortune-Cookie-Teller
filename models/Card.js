const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Card extends Model {}

Card.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fortune_telling: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    meanings: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    questionstoask: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    img: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },

  {
    hooks: {
      beforeValidate: async (newCard) => {
        newCard.fortune_telling = JSON.stringify(newCard.fortune_telling);

        newCard.meanings = JSON.stringify(newCard.meanings);

        newCard.questionstoask = JSON.stringify(newCard.questionstoask);

        return newCard;
      },
      // beforeUpdate: async (newCard) => {
      //   newCard.fortune_telling = JSON.stringify(newCard.fortune_telling);
      //   return newCard;
      // },
      afterFind: async (foundCard) => {
        foundCard.fortune_telling = JSON.parse(foundCard.fortune_telling);
        return foundCard;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'card',
  }
);

module.exports = Card;

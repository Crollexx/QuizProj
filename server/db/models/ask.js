'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ask extends Model {
   
    static associate({ Topic }) {
      this.belongsTo(Topic, { foreignKey: 'topicId' })
    }
  }
  Ask.init({
    question: {
      allowNull: false,
      type: DataTypes.STRING
    },
    answer: {
      allowNull: false,
      type: DataTypes.STRING
    },
    img: {
      type: DataTypes.STRING
    },
    topicId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'topic',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Ask',
  });
  return Ask;
};
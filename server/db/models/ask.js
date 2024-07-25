'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
   
    static associate({ Category }) {
      this.belongsTo(Category, { foreignKey: 'categoryId' })
    }
  }
  Question.init({
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
    categoryId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Category',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Question;
};
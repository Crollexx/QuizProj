'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
   
    static associate({ Question }) {
      this.hasMany(Question, { foreignKey: 'categoryId' })
    }
  }
  Category.init({
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    img: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};
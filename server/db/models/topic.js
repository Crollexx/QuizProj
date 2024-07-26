'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
   
    static associate({ Ask }) {
      this.hasMany(Ask, { foreignKey: 'topicId' })
    }
  }
  Topic.init({
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    img: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Topic',
  });
  return Topic;
};
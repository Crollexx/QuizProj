'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          title: "Угадай персонажей по картинкам",
          img: 'client/public/Снимок экрана 2024-07-25 175236.png',
        },
        
        
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};

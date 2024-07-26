'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Topics",
      [
        {
          title: "Угадай Эльбрусовца",
          img: 'client/public/Снимок экрана 2024-07-25 175236.png',
        },
        {
          title: "Угадай персонажа",
          img: "https://cs6.pikabu.ru/post_img/big/2015/04/04/5/1428133715_1088484325.jpg",
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Topics", null, {});
  },
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Questions",
      [
        {
          question: '👳🛶🐯',
          answer: 'Жизнь Пи',
          img: 'https://img.freepik.com/free-vector/question-mark-in-cartoon-style-circle_78370-1434.jpg',
          categoryId: 1
        },
    
        {
          question: '🗡️🪑🛡️',
          answer: 'Игра престолов',
          img: 'https://img.freepik.com/free-vector/question-mark-in-cartoon-style-circle_78370-1434.jpg',
          categoryId: 2
        },
        

      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Question", null, {});
  },
};


'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Asks",
      [
        {
          question: 'Кто это ???😱😱😱',
          answer: 'Вэнсдей',
          img: 'client/public/Снимок экрана 2024-07-25 154250.png',
          topicId: 1
        },
        {
          question: 'Кто это ???😱😱😱',
          answer: 'Барт',
          img: 'client/public/Снимок экрана 2024-07-25 154307.png',
          topicId: 1
        },
        {
          question: 'Кто это ???😱😱😱',
          answer: 'Питер',
          img: 'client/public/Снимок экрана 2024-07-25 154315.png',
          topicId: 1
        },
        {
          question: 'Кто это ???😱😱😱',
          answer: 'Мэйбл',
          img: 'client/public/Снимок экрана 2024-07-25 154739.png',
          topicId: 1
        },
        {
          question: 'Кто это ???😱😱😱',
          answer: 'Бендер',
          img: 'client/public/Снимок экрана 2024-07-25 173109.png',
          topicId: 1
        },
        {
          question: 'Кто это ???😱😱😱',
          answer: 'Лоракс',
          img: 'client/public/Снимок экрана 2024-07-25 175956.png',
          topicId: 1
        },
        {
          question: 'Кто это ???😱😱😱',
          answer: 'Пеппа',
          img: 'client/public/Снимок экрана 2024-07-25 180432.png',
          topicId: 1
        },
        {
          question: 'Кто это ???😱😱😱',
          answer: 'Блум',
          img: 'client/public/Снимок экрана 2024-07-25 181332.png',
          topicId: 1
        },
        {
          question: 'Кто это ???😱😱😱',
          answer: 'Крош',
          img: 'client/public/Снимок экрана 2024-07-25 182043.png',
          topicId: 1
        },
        
        
        {
          question: 'Кто это ???😱😱😱',
          answer: 'Крош',
          img: 'client/public/Снимок экрана 2024-07-25 182043.png',
          topicId: 2
        },


      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Asks", null, {});
  },
};


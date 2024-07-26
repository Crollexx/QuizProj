'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Asks",
      [
        {
          question: 'Кто это ???😱😱😱',
          answer: 'Тамирлан',
          img: '/Эльбрусовцы/Тамирлан.png',
          topicId: 1
        },
        {
          question: 'Кто это ???😱😱😱',
          answer: 'Айгиз',
          img: '/Эльбрусовцы/Айгиз.png',
          topicId: 1
        },
        {
          question: 'Кто это ???😱😱😱',
          answer: 'Игорь',
          img: '/Эльбрусовцы/Игорь.png',
          topicId: 1
        },
        {
          question: 'Кто это ???😱😱😱',
          answer: 'Беня',
          img: '/Эльбрусовцы/Беня.png',
          topicId: 1
        },
        {
          question: 'Кто это ???😱😱😱',
          answer: 'Полина',
          img: '/Эльбрусовцы/Полина.png',
          topicId: 1
        },
        {
          question: 'Кто это ???😱😱😱',
          answer: 'Лика',
          img: '/Эльбрусовцы/Лика.png',
          topicId: 1
        },
        {
          question: 'Кто это ???😱😱😱',
          answer: 'Пага',
          img: '/Эльбрусовцы/Пага.png',
          topicId: 1
        },
        {
          question: 'Кто это ???😱😱😱',
          answer: 'Юра',
          img: '/Эльбрусовцы/Юра.png',
          topicId: 1
        },
        {
          question: 'Кто это ???😱😱😱',
          answer: 'Влад',
          img: '/Эльбрусовцы/Влад.png',
          topicId: 1
        },{
          question: 'Кто это ???😱😱😱',
          answer: 'Андрей',
          img: '/Эльбрусовцы/Андрей.png',
          topicId: 1
        },
        {
          question: 'Кто это ???😱😱😱',
          answer: 'Вероника',
          img: '/Эльбрусовцы/Вероника.png',
          topicId: 1
        },
        {
          question: 'Кто это ???😱😱😱',
          answer: 'Наташа',
          img: '/Эльбрусовцы/Наташа.png',
          topicId: 1
        },
        {
          question: 'Кто это ???😱😱😱',
          answer: 'Сташик',
          img: '/Эльбрусовцы/Сташик.png',
          topicId: 1
        },
        {
          question: 'Кто это ???😱😱😱',
          answer: 'Андрей',
          img: '/Эльбрусовцы/Андрей2.png',
          topicId: 1
        },
        {
          question: 'Кто это ???😱😱😱',
          answer: 'Олег',
          img: '/Эльбрусовцы/Олег.png',
          topicId: 1
        },{
          question: 'Кто это ???😱😱😱',
          answer: 'Андрей',
          img: '/Эльбрусовцы/Андрей 3.png',
          topicId: 1
        },
        {
          question: 'Кто это ???😱😱😱',
          answer: 'Никита',
          img: '/Эльбрусовцы/Никита.png',
          topicId: 1
        },

        {
          question: 'Кто это ???😱😱😱',
          answer: 'Женя',
          img: '/Эльбрусовцы/Женя.png',
          topicId: 1
        },

        {
          question: 'Кто это ???😱😱😱',
          answer: 'Миша',
          img: '/Эльбрусовцы/Миша.png',
          topicId: 1
        }          
        
        
        
        ,
        {
          question: 'Кто это ???😱😱😱',
          answer: 'Вэнсдей',
          img: '/мультики/Снимок экрана 2024-07-25 154250.png',
          topicId: 2
        },
        {
          question: 'Кто это ???😱😱😱',
          answer: 'Барт',
          img: '/мультики/Снимок экрана 2024-07-25 154307.png',
          topicId: 2
        },
        {
          question: 'Кто это ???😱😱😱',
          answer: 'Питер',
          img: '/мультики/Снимок экрана 2024-07-25 154315.png',
          topicId: 2
        },
        {
          question: 'Кто это ???😱😱😱',
          answer: 'Мэйбл',
          img: '/мультики/Снимок экрана 2024-07-25 154739.png',
          topicId: 2
        },
        {
          question: 'Кто это ???😱😱😱',
          answer: 'Бендер',
          img: '/мультики/Снимок экрана 2024-07-25 173109.png',
          topicId: 2
        },
        {
          question: 'Кто это ???😱😱😱',
          answer: 'Лоракс',
          img: '/мультики/Снимок экрана 2024-07-25 175956.png',
          topicId: 2
        },
        {
          question: 'Кто это ???😱😱😱',
          answer: 'Пеппа',
          img: '/мультики/Снимок экрана 2024-07-25 180432.png',
          topicId: 2
        },
        {
          question: 'Кто это ???😱😱😱',
          answer: 'Блум',
          img: '/мультики/Снимок экрана 2024-07-25 181332.png',
          topicId: 2
        },
        {
          question: 'Кто это ???😱😱😱',
          answer: 'Крош',
          img: '/мультики/Снимок экрана 2024-07-25 182043.png',
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


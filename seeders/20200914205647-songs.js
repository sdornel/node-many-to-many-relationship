'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Songs', [{
    title: 'example song',
    lyrics: 'long string here',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'another song',
    lyrics: 'another long string',
    createdAt: new Date(),
    updatedAt: new Date()
  }], {});
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Songs', null, {});
  }
};





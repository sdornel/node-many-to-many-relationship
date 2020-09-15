'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Songs', [{
    title: 'example song',
    lyrics: 'long string here',
    artistId: 1,
    genreId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'another song',
    lyrics: 'another long string',
    artistId: 2,
    genreId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  }], {});
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Songs', null, {});
  }
};








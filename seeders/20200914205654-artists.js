'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Artists', [{
    name: 'Drake',
    bio: 'biography of Drake',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Frank Sinatra',
    lyrics: 'another biography',
    createdAt: new Date(),
    updatedAt: new Date()
  }], {});
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Artists', null, {});
  }
};

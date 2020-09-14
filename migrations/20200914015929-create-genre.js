'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Genres', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      // songId: {
      //   type: Sequelize.INTEGER,
      //   onDelete: 'CASCADE',
      //   references: {
      //     model: 'Songs',
      //     key: 'id',
      //     as: 'songId',
      //   }
      // },
      // artistId: {
      //   type: Sequelize.INTEGER, 
      //   onDelete: 'CASCADE',
      //   references: {
      //     model: 'Artists',
      //     key: 'id',
      //     as: 'artistId',
      //   }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Genres');
  }
};
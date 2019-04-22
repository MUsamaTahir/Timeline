'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: Sequelize.STRING,
        },
        email: {
          type: Sequelize.STRING,
          unique: true
        },
        password: {
          type: Sequelize.STRING,
        },
        createdAt: {
          type: Sequelize.DATE,
          field: 'createdAt'
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: 'updatedAt'
        },
        DeletedAt: {
          type: Sequelize.DATE,
          field: 'deletedAt'
        }
      });

  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('users');
  }
};

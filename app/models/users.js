module.exports = function(sequelize, Sequelize) {
  var users = sequelize.define('users', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      field: 'name'
    },
    email: {
      type: Sequelize.STRING,
      field: 'email'
    },
    password: {
      type: Sequelize.STRING,
      field: 'password'
    },
    createdAt: {
      type: Sequelize.DATE,
      field: 'createdAt'
    },
    updatedAt: {
      type: Sequelize.DATE,
      field: 'updatedAt'
    },
    deletedAt: {
      type: Sequelize.DATE,
      field: 'deletedAt'
    }
  }, {
    paranoid: true,
    classMethods: {},
    instanceMethods: {},
    defaultScope: {},
    scopes: {
      view: {
        attributes: ['id', 'name', 'email', 'password']
      }
    }
  });

  return users;
};

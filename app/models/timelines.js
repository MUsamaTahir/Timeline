module.exports = function(sequelize, Sequelize) {
  var timelines = sequelize.define('Timelines', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: Sequelize.STRING,
      field: 'title'
    },
    description: {
      type: Sequelize.STRING,
      field: 'description'
    },
    userId:{
      type: Sequelize.INTEGER,
      field: 'userId'
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
        attributes: ['id', 'title', 'description', 'userId']
      }
    }
  });

  return timelines;
};

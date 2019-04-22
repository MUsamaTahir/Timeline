var log = require('../app/lib/logger').child({type: "database"});

module.exports = {
  "development": {
    "username": "postgres",
    "password": "123",
    "database": "Timeline",
    "host": "localhost",
    "dialect": "postgres",
    "logging": function (message) {
      log.debug(message);
    }
  },
  "test": {
    "username": "postgres",
    "password": "123",
    "database": "Timeline_test",
    "host": "localhost",
    "dialect": "postgres",
    "logging": function (message) {
      log.debug(message);
    }
  },
  "production": {
    "username": "postgres",
    "password": "123",
    "database": "Timeline",
    "host": "localhost",
    "dialect": "postgresql",
    "logging": function (message) {
      log.debug(message);
    }
  }
};

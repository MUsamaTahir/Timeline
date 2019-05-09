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
    "username": "okoysmbdmkaudj",
    "password": "29fec2e9b2cd11fbccabc94abb546511ef2e4a3340b477bec2f0080e80284395",
    "database": "d3m7nd4bkj8eh6",
    "host": "ec2-23-23-92-204.compute-1.amazonaws.com",
    "dialect": "postgresql",
    "logging": function (message) {
      log.debug(message);
    }
  }
};

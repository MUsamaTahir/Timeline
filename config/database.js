var log = require('../app/lib/logger').child({type: "database"});

module.exports = {
  "development": {
    "username": "ndjajcbg",
    "password": "BPG1M3gTidQhqvl9sjRamUbu3qEGDwN2",
    "database": "ndjajcbg",
    "dialect": "postgresql",
    "host": "	isilo.db.elephantsql.com",
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
    "username": "ndjajcbg",
    "password": "BPG1M3gTidQhqvl9sjRamUbu3qEGDwN2",
    "database": "ndjajcbg",
    "host": "	isilo.db.elephantsql.com",
    "dialect": "postgresql",
    "logging": function (message) {
      log.debug(message);
    }
  }
};

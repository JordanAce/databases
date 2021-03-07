var db = require('../db');
var Sequelize = require('sequelize');



module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (callback) {
      var queryString = 'SELECT * FROM messages';
      var queryArgs = [];
      db.dbConnection.query(queryString, queryArgs, function(err, results) {
        if (err) {
          console.log('Error in messages get' + err);
        }
        callback(results);
      });
    },
    // a function which can be used to insert a message into the database
    post: function (body) {
      var queryString = `insert into messages (username, text, roomname) values ('${body.username}', '${body.message}', '${body.roomname}')`;
      var queryArgs = [];
      db.dbConnection.query(queryString, queryArgs, function(err, results) {
        if (err) {
          console.log('Error in messages post' + err);
        }
      });
    },
  },

  users: {
    // Ditto as above.
    get: function () {
      var queryString = 'SELECT * FROM users';
      var queryArgs = [];
      db.dbConnection.query(queryString, queryArgs, function(err, results) {
        if (err) {
          console.log('Error in user get' + err);
        } else {
          return results;
        }
      });
    },
    post: function (body) {
      var queryString = `insert into users (username) values ('${body.username}')`;
      var queryArgs = [];
      db.dbConnection.query(queryString, queryArgs, function(err, results) {
        if (err) {
          console.log('Error in user post ' + err);
        }
      });
    }
  }
};

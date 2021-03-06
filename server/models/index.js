var db = require('../db');


module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (callback) {
      var queryString = 'SELECT * FROM messages';
      var queryArgs = [];
      db.dbConnection.query(queryString, queryArgs, function(err, results) {
        if (err) {
          console.log('Error' + err);
        }
        callback(results);
      });
    },
    // a function which can be used to insert a message into the database
    post: function (body) {
      console.log('post body ' + body.message);
      var queryString = `insert into messages (username, text, roomname) values ('${body.username}', '${body.message}', '${body.roomname}')`;
      // var queryString = `insert into messages (userMessage) values ('${body.message}')`;

      var queryArgs = [];
      db.dbConnection.query(queryString, queryArgs, function(err, results) {
        if (err) {
          console.log('Error' + err);
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
          console.log('Error' + err);
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

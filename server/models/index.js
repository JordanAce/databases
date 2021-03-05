var db = require('../db');


module.exports = {
  messages: {
    // a function which produces all the messages
    get: function () {
      var queryString = 'SELECT * FROM messages';
      var queryArgs = [];
      db.dbConnection.query(queryString, queryArgs, function(err, results) {
        if (err) {
          console.log('Error' + err);
        } else {
          return results;
        }
      });
    },
    // a function which can be used to insert a message into the database
    post: function () {
      var queryString = `insert into messages values (${messages}, ${userMessage}, ${roomName})`;
      db.dbConnection.query(queryString, queryArgs, function(err, results) {
        if (err) {
          console.log('Error' + err);
        } else {
          return results;
        }
      });
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
      post: function () {
        var queryString = `insert into users values ${users}, ${userMessage}, ${roomName}`;
        db.dbConnection.query(queryString, queryArgs, function(err, results) {
          if (err) {
            console.log('Error' + err);
          } else {

          }
        });

      }
    }
  },
};

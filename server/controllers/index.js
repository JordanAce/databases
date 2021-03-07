var models = require('../models');
var Sequelize = require('sequelize');

var db = new Sequelize('chat', 'root', 'Religion!2009');

var User = db.define('User', {
  username: Sequelize.STRING
});

console.log(User.name);


var Message = db.define('Message', {
  userid: Sequelize.INTEGER,
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

console.log(Message);
module.exports = {



  messages: {
    get: function (req, res) {
      models.messages.get((result) => {
        res.write(JSON.stringify(result));
        res.end();
      });
    },
    // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body);
      res.end();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      res.send('users test');
      models.users.get();
    },
    post: function (req, res) {
      models.users.post(req.body);
      res.end();
    }
  }
};


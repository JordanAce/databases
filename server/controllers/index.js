var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((result) => {
        res.write(JSON.stringify(result));
        res.end();
      });

      // res.write(JSON.stringify(models.messages.get()));
      // res.end();
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


var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var Sequelize = require('sequelize');

var db = new Sequelize('chat', 'root', 'Religion!2009');

var User = db.define('User', {
  username: Sequelize.STRING
});


var Message = db.define('Message', {
  userid: Sequelize.INTEGER,
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

User.hasMany(Message);
Message.belongsTo(User);

exports.dbConnection = mysql.createConnection({
  user: 'root',
  password: 'Religion!2009',
  database: 'chat'
});
exports.dbConnection.connect();



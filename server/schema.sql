USE chat;

DROP TABLE IF EXISTS `users`;
CREATE TABLE users (
  `user_id` int(10) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(55) DEFAULT NULL,
  `user_message` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
);

DROP TABLE IF EXISTS `messages`;
CREATE TABLE messages (
  `messages_id` int(10) NOT NULL AUTO_INCREMENT,
  `messages_name` varchar(55) DEFAULT NULL,
  `messages_message` varchar (100) DEFAULT NULL,
  PRIMARY KEY (`messages_id`)
  /* Describe your table here.*/
);

CREATE TABLE rooms (
  `rooms_id` int(10) NOT NULL AUTO_INCREMENT,
  `room_name` varchar(55) DEFAULT NULL,
  PRIMARY KEY (`rooms_id`)
);






/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


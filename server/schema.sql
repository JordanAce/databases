USE chat;

DROP TABLE IF EXISTS `users`;
CREATE TABLE users (
  `userID` int(10) NOT NULL AUTO_INCREMENT,
  `userName` varchar(55) DEFAULT NULL,
  `userMessage` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`userId`)
);

DROP TABLE IF EXISTS `messages`;
CREATE TABLE messages (
  `messagesId` int(10) NOT NULL AUTO_INCREMENT,
  `userName` varchar(55) DEFAULT NULL,
  `userMessage` varchar (255) DEFAULT NULL,
  `roomName` varchar (255) DEFAULT NULL,
  PRIMARY KEY (`messagesId`)
);

DROP TABLE IF EXISTS `rooms`;
CREATE TABLE rooms (
  `roomsId` int(10) NOT NULL AUTO_INCREMENT,
  `roomsName` varchar(55) DEFAULT NULL,
  PRIMARY KEY (`roomsId`)
);






/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


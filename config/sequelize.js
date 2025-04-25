const Sequelize = require('sequelize'); 
// on declare une constante Sequelize qui est le module Sequelize 

require("dotenv").config(); 

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD, 
    {
      host: process.env.DB_HOST,
      dialect: "mysql",
      port: process.env.DB_PORT,
    }
  );

module.exports = sequelize; 
// on exporte la constante sequelize pour l'utiliser dans d'autres fichiers


const sequelize = require("sequelize");

const connection = new sequelize("traveller_db", "root" , "9richardlane", {
    host: "localhost",
    dialect: "mysql",
    define: {timestamp: false},
    pool: {max: 5, min: 0}, 
    logging: false
});

module.exports = connection



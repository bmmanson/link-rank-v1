var Sequelize = require('sequelize');

var URL = process.env.DATABASE_URL || 'postgres://localhost:5432/linkrankv1';

var db = new Sequelize(URL, {
  logging: false
});

module.exports = db;
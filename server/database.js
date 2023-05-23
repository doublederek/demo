const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('demo_db', 'root', 's0l1D5naK#', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;

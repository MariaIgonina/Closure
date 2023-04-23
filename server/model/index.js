const Sequelize = require('sequelize');

const sequelize = new Sequelize('traps', 'mariaigonina', 'Lola2016', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

module.exports = sequelize;
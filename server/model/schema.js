const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Trap = sequelize.define('Trap', {
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  basin: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  formation: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  horizon: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  reservoir: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  depth: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  lat: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  long: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  square: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  heff: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  porosity: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  saturation: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  density: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  volumefactor: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  contact: {
    type: DataTypes.TEXT,
    allowNull: false,
  }
}, {
  freezeTableName: true
});

module.exports = Trap;
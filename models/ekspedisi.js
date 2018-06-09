'use strict';
module.exports = (sequelize, DataTypes) => {
  var Ekspedisi = sequelize.define('Ekspedisi', {
    nama: DataTypes.STRING
  }, {
    timestamps: false,
  });
  Ekspedisi.associate = function(models) {
    // associations can be defined here
  };
  return Ekspedisi;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  var Provinsi = sequelize.define('Provinsi', {
    nama: DataTypes.STRING
  }, {
    timestamps: false,
  });
  Provinsi.associate = function(models) {
    // associations can be defined here
  };
  return Provinsi;
};
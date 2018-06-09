'use strict';
module.exports = (sequelize, DataTypes) => {
  var Kategori = sequelize.define('Kategori', {
    nama: DataTypes.STRING
  }, {
    timestamps: false,
  });
  Kategori.associate = function(models) {
    // associations can be defined here
  };
  return Kategori;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  var Keranjang = sequelize.define('Keranjang', {
    id_customer: DataTypes.INTEGER,
    id_barang: DataTypes.INTEGER,
    jml_barang: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    catatan: DataTypes.STRING
  }, { timestamps: false, });
  Keranjang.associate = function(models) {
    // associations can be defined here
  };
  return Keranjang;
};
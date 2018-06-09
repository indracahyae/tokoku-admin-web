'use strict';
module.exports = (sequelize, DataTypes) => {
  var Suplier = sequelize.define('Suplier', {
    nama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    tlp: DataTypes.STRING,
    keterangan: DataTypes.STRING
  }, {
    timestamps: false,
  });
  Suplier.associate = function(models) {
    // associations can be defined here
    // Suplier.hasMany(models.Barang, {foreignKey: 'id_suplier', sourceKey: 'id'});
  };
  return Suplier;
};
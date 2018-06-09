'use strict';
module.exports = (sequelize, DataTypes) => {
  var Kota = sequelize.define('Kota', {
    nama: DataTypes.STRING,
    id_provinsi: DataTypes.INTEGER
  }, {
    timestamps: false,
  });
  Kota.associate = function(models) {
    // associations can be defined here
    Kota.belongsTo(models.Provinsi, {
      foreignKey: 'id_provinsi',
      targetKey: 'id'
    });
  };
  return Kota;
};
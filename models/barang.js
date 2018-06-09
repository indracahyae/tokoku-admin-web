'use strict';
module.exports = (sequelize, DataTypes) => {
  var Barang = sequelize.define('Barang', {
    kode: DataTypes.STRING,
    nama: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    stok: DataTypes.INTEGER,
    image: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    diskon: DataTypes.INTEGER,
    id_suplier: DataTypes.INTEGER,
    id_kategori: DataTypes.INTEGER,
  }, {
    timestamps: false,
  });
  Barang.associate = function(models) {
    // associations can be defined here
    Barang.belongsTo(models.Suplier, {
      foreignKey: 'id_suplier',
      targetKey: 'id'
    });
    Barang.belongsTo(models.Kategori, {
      foreignKey: 'id_kategori',
      targetKey: 'id'
    });
  };
  return Barang;
};
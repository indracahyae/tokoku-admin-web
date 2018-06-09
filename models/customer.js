'use strict';
module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define('Customer', {
    email: DataTypes.STRING,
    nama: DataTypes.STRING,
    tlp: DataTypes.STRING,
    password: DataTypes.STRING,
    alamat: DataTypes.STRING,
    id_kota: DataTypes.INTEGER,
    poin: DataTypes.INTEGER,
    foto: DataTypes.STRING
  }, {
    timestamps: false,
  });
  Customer.associate = function(models) {
    // associations can be defined here
    Customer.belongsTo(models.Kota, {
      foreignKey: 'id_kota',
      targetKey: 'id'
    });
  };
  return Customer;
};
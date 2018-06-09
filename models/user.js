'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    nama: DataTypes.STRING,
    tlp: DataTypes.STRING,
    alamat: DataTypes.STRING,
    akses: DataTypes.INTEGER
  }, {
    timestamps: false,
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
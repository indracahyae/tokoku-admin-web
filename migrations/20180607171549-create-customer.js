'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      nama: {
        type: Sequelize.STRING
      },
      tlp: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      id_kota: {
        type: Sequelize.INTEGER
      },
      poin: {
        type: Sequelize.INTEGER
      },
      foto: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Customers');
  }
};
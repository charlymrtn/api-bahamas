/* eslint-disable */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Address', {
    addressID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    addressType: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: 'L'
    },
    leadID: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      unique: true
    },
    representativeID: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      unique: true
    },
    addressName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    country: {
      type: DataTypes.CHAR(3),
      allowNull: true
    }
  }, {
    tableName: 'Address',
      createdAt: false,
      updatedAt: false
  });
};

/* eslint-disable */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TaxIdentification', {
    leadID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      unique: true
    },
    taxIdentificationID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    countryID: {
      type: DataTypes.CHAR(3),
      allowNull: true,
      unique: true
    },
    taxNumber: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    isDefault: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: 'N'
    },
    taxIdentificationType: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: 'L'
    }
  }, {
    tableName: 'TaxIdentification'
  });
};

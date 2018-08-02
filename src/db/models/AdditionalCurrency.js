/* eslint-disable */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AdditionalCurrency', {
    leadID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    currencyCode: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: 'A'
    }
  }, {
    tableName: 'AdditionalCurrency'
  });
};

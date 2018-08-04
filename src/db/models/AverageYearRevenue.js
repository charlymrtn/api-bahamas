/* eslint-disable */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AverageYearRevenue', {
    rangeID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    rangeName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    rangeDescription: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    status: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: 'A'
    }
  }, {
    tableName: 'AverageYearRevenue'
  });
};

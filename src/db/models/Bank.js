/* eslint-disable */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Bank', {
    bankID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SourceFundInformation',
        key: 'bankID'
      }
    },
    country: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    bankName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    status: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: 'A'
    }
  }, {
    tableName: 'Bank'
  });
};

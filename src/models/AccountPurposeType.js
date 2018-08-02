/* eslint-disable */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('AccountPurposeType', {
    purposeCode: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Lead',
        key: 'accountPurposeType'
      }
    },
    purposeDescription: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    status: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: 'A'
    }
  }, {
    tableName: 'AccountPurposeType'
  });
};

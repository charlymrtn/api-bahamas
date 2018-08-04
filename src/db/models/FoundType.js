/* eslint-disable */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FoundType', {
    fundTypeCode: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    fundTypeName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fundDescription: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    status: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: 'A'
    }
  }, {
    tableName: 'FoundType'
  });
};

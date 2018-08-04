/* eslint-disable */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RightType', {
    rightClass: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    rightType: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    status: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: 'A'
    }
  }, {
    tableName: 'RightType'
  });
};

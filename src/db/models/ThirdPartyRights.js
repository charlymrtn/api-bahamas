/* eslint-disable */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ThirdPartyRights', {
    recordID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    leadID: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      unique: true
    },
    rigthClass: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      references: {
        model: 'RightType',
        key: 'rightClass'
      }
    },
    rightType: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      references: {
        model: 'RightType',
        key: 'rightType'
      }
    }
  }, {
    tableName: 'ThirdPartyRights'
  });
};

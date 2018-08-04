/* eslint-disable */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OriginOfRelationship', {
    originID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    originName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    originDescription: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    status: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: 'A'
    }
  }, {
    tableName: 'OriginOfRelationship'
  });
};

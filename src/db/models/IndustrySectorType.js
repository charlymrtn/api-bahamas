/* eslint-disable */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IndustrySectorType', {
    industrySectorID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ThirdPartyInformation',
        key: 'industrySectorID'
      }
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    status: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: 'A'
    }
  }, {
    tableName: 'IndustrySectorType'
  });
};

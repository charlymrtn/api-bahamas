/* eslint-disable */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SourceFundInformation', {
    leadID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    sourceTypeCode: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    bankID: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '1'
    },
    fundType: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: '1'
    },
    briefExplanation: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    tableName: 'SourceFundInformation'
  });
};

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
      allowNull: false,
      references: {
        model: 'SourceOfFund',
        key: 'sourceCode'
      }
    },
    bankID: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      unique: true
    },
    fundType: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      references: {
        model: 'FoundType',
        key: 'fundTypeCode'
      }
    },
    briefExplanation: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    tableName: 'SourceFundInformation'
  });
};

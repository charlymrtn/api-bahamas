/* eslint-disable */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ClientAdditionalInformation', {
    leadId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    hasPoliticalActivity: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: 'N'
    },
    professionalActivityType: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    industrySectorID: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '1'
    },
    yearsOfActivityType: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    averageYearRevenue: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    civilStatus: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    numberOfChildren: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    expectedBankVisits: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    originRelationshipid: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    tableName: 'ClientAdditionalInformation'
  });
};

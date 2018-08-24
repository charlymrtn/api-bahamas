/* eslint-disable */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Lead', {
    leadID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    nationality: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    citizenship: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    placeOfBirth: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    documentType: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    documentNumber: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    mainCurrency: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    useCodeName: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: 'N'
    },
    codeName: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    isHoldMailServiceRequired: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: 'N'
    },
    hasGrantMandatePIBL: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: 'N'
    },
    hasGrantMandate3rdParty: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: 'N'
    },
    hasAutoricedPersonPOA: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: 'N'
    },
    numberOfRepresentatives: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    hasPOA3rdParty: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: 'N'
    },
    numberOf3rdPartyPOA: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    hasBenefitialOwner: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: 'N'
    },
    numberOfBeneficialOwners: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    accountPurposeType: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      unique: true
    },
    accountPurpose: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    wantsCreditCard: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: 'N'
    },
    processInstanceID: {
      type: DataTypes.BIGINT(20),
      allowNull: true
    },
    telephoneNumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'Lead',
    createdAt: false,
    updatedAt: false
  });
};

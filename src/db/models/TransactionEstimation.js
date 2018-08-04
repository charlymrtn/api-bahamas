/* eslint-disable */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TransactionEstimation', {
    leadID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    numberOfInitialDeposits: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    globalAmountExpected: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.0000'
    },
    expectedArrivalDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    expectedMontlyCapitalInflows: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    expectedMontlyCapitalOutflows: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    rangeMonthlyInflows: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      unique: true
    },
    rangeMonthlyOutflows: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      unique: true
    },
    levelKnowledgeFMID: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      unique: true
    }
  }, {
    tableName: 'TransactionEstimation'
  });
};

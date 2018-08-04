/* eslint-disable */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RangeMontlyFlows', {
    rangeID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    rangeName: {
      type: DataTypes.STRING(100),
      allowNull: true,
      references: {
        model: 'TransactionEstimation',
        key: 'rangeMonthlyOutflows'
      }
    },
    rangeDescription: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    status: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: 'A'
    }
  }, {
    tableName: 'RangeMontlyFlows'
  });
};

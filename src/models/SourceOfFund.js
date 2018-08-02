/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SourceOfFund', {
    sourceCode: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    sourceName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    sourceDescription: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    status: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: 'A'
    }
  }, {
    tableName: 'SourceOfFund'
  });
};

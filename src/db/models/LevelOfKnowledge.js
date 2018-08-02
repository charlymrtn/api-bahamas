/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LevelOfKnowledge', {
    levelID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'TransactionEstimation',
        key: 'levelKnowledgeFMID'
      }
    },
    levelName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    levelDescription: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    status: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: 'A'
    }
  }, {
    tableName: 'LevelOfKnowledge'
  });
};

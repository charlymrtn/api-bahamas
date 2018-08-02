/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('YearsOfActivityRange', {
    rangeID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    rangeName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    rangeDescription: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    tableName: 'YearsOfActivityRange'
  });
};

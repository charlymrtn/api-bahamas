/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProffesionalActivityType', {
    professionalTypeID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ThirdPartyInformation',
        key: 'professionalActivityID'
      }
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    status: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    tableName: 'ProffesionalActivityType'
  });
};

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CivilStatus', {
    civilStatusCode: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      references: {
        model: 'ClientAdditionalInformation',
        key: 'civilStatus'
      }
    },
    statusName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    statusDescription: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    status: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: 'A'
    }
  }, {
    tableName: 'CivilStatus'
  });
};

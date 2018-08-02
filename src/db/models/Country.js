

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Country', {
    countryCode: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ThirdPartyInformation',
        key: 'citizenship'
      }
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    status: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: 'A'
    }
  }, {
    tableName: 'Country'
  });
};

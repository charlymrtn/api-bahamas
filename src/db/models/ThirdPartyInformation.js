/* eslint-disable */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ThirdPartyInformation', {
    thirdPartyID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    rightID: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      unique: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    citizenship: {
      type: DataTypes.CHAR(3),
      allowNull: true,
      unique: true
    },
    placeOfBirth: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: true
    },
    professionalActivityID: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      unique: true
    },
    countryOfWork: {
      type: DataTypes.CHAR(3),
      allowNull: true,
      unique: true
    },
    industrySectorID: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      unique: true
    }
  }, {
    tableName: 'ThirdPartyInformation'
  });
};

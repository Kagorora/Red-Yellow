'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hotel = sequelize.define('Hotel', {
    name: DataTypes.STRING,
    location: DataTypes.STRING
  }, {});
  Hotel.associate = function(models) {
    // associations can be defined here
  };
  return Hotel;
};
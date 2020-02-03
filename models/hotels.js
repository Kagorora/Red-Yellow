'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hotels = sequelize.define('Hotels', {
    name: DataTypes.STRING,
    location: DataTypes.STRING
  }, {});
  Hotels.associate = function(models) {
    // associations can be defined here
  };
  return Hotels;
};
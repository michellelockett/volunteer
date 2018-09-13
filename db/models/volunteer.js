'use strict';
module.exports = (sequelize, DataTypes) => {
  var Volunteer = sequelize.define('Volunteer', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {});
  Volunteer.associate = function(models) {
    Volunteer.hasMany(models.Organization, { through: 'Organization_Volunteer'});
    Volunteer.hasMany(models.Need, {through: 'Volunteer_Need'});
  };
  return Volunteer;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  var Organization = sequelize.define('Organization', {
    name: DataTypes.STRING
  }, {});
  Organization.associate = function(models) {
    Organization.hasMany(models.Need);
    Organization.hasMany(models.Employee);
    Organization.hasMany(models.Volunteer, { through: 'Organization_Volunteer'});
  };
  return Organization;
};
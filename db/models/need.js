'use strict';
module.exports = (sequelize, DataTypes) => {
  var Need = sequelize.define('Need', {
    numVolunteers: DataTypes.INTEGER,
    claimed: DataTypes.BOOLEAN,
    met: DataTypes.BOOLEAN,
    description: DataTypes.TEXT
  }, {});
  Need.associate = function(models) {
    Need.belongsTo(models.Organization);
    Need.hasMany(models.Volunteer, {through: 'Volunteer_Need'});
    Need.hasOne(models.Recipient);
    Need.hasOne(models.NeedType);
  };
  return Need;
};
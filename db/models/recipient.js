'use strict';
module.exports = (sequelize, DataTypes) => {
  var Recipient = sequelize.define('Recipient', {
    organization: DataTypes.BOOLEAN,
    description: DataTypes.TEXT,
  }, {});
  Recipient.associate = function(models) {
    Recipient.belongsTo(models.Need);
  };
  return Recipient;
};
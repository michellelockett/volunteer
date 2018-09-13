'use strict';
module.exports = (sequelize, DataTypes) => {
  var NeedType = sequelize.define('NeedType', {
    type: DataTypes.STRING
  }, {});
  NeedType.associate = function(models) {
    NeedType.belongsTo(models.Need);
  };
  return NeedType;
};
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Organizations', [
      {name: 'Lockett Hypnotherapy'},
      {name: 'Zios Software'},
      {name: 'Sacramento Baby Space'}], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Organizations', null, {});
  }
};

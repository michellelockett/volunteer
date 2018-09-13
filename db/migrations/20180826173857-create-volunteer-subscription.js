'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Volunteer_Subscription', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      volunteer_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Volunteers',
          key: 'id'
        },
        allowNull: false
      },
      organization_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Organizations',
          key: 'id'
        }
      },
      needType_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'NeedTypes',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Volunteer_Subscription');
  }
};

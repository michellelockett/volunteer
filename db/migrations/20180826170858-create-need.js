'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Needs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numVolunteers: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      claimed: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      met: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT
      },
      recipientId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Recipients',
          key: 'id'
        }
      },
      needTypeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'NeedTypes',
          key: 'id'
        }
      },
      organizationId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Organizations',
          key: 'id'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Needs');
  }
};
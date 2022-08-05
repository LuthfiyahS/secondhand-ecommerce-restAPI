'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('RoleUsers', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            role: { type: Sequelize.STRING, allowNull: false, unique: true },
            description: { type: Sequelize.TEXT },
            createdAt: { allowNull: false, type: Sequelize.DATE },
            updatedAt: { allowNull: false, type: Sequelize.DATE }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('RoleUsers');
    }
};

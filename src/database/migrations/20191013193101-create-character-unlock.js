module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('characterUnlock', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			character_id: {
				type: Sequelize.INTEGER,
				references: { model: 'character', key: 'id' },
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
				allowNull: false,
			},
			level: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			created_at: { type: Sequelize.DATE, allowNull: false },
			updated_at: { type: Sequelize.DATE, allowNull: false },
		});
	},

	down: queryInterface => {
		return queryInterface.dropTable('characterUnlock');
	},
};

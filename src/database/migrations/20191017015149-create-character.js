module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('character', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			class: { type: Sequelize.STRING, allowNull: false, unique: true },
			hp: { type: Sequelize.SMALLINT, allowNull: false },
			att: { type: Sequelize.SMALLINT, allowNull: false },
			mag: { type: Sequelize.SMALLINT, allowNull: false },
			def: { type: Sequelize.SMALLINT, allowNull: false },
			m_def: { type: Sequelize.SMALLINT, allowNull: false },
			speed: { type: Sequelize.SMALLINT, allowNull: false },
			critical: { type: Sequelize.SMALLINT, allowNull: false },
			ratio: { type: Sequelize.SMALLINT, allowNull: false },
			range: { type: Sequelize.SMALLINT, allowNull: false },
			passive_id: {
				type: Sequelize.INTEGER,
				references: { model: 'characterPassive', key: 'id' },
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
				allowNull: false,
			},
			weapon_id: {
				type: Sequelize.INTEGER,
				references: { model: 'characterWeapon', key: 'id' },
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
				allowNull: false,
			},
			created_at: { type: Sequelize.DATE, allowNull: false },
			updated_at: { type: Sequelize.DATE, allowNull: false },
			deleted_at: { type: Sequelize.DATE },
		});
	},

	down: queryInterface => {
		return queryInterface.dropTable('character');
	},
};

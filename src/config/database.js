module.exports = {
	dialect: 'postgres',
	host: 'localhost',
	username: 'postgres',
	password: 'docker',
	database: 'mysteryOfFortune',
	define: {
		timestamps: true,
		underscored: true,
		underscoredAll: true,
		freezeTableName: true,
	},
};

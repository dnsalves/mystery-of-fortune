module.exports = {
	up: queryInterface => {
		return queryInterface.bulkInsert(
			'characterPassive',
			[
				{ name: 'None', created_at: new Date(), updated_at: new Date() },
				{
					name: 'Drawing Aggro',
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					name: 'Critical Attack',
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					name: 'Auto Ether',
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					name: 'Magical Reflection',
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					name: 'Auto Recovery',
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					name: 'Ignore Defense',
					created_at: new Date(),
					updated_at: new Date(),
				},
			],
			{}
		);
	},

	down: queryInterface => {
		return queryInterface.bulkDelete('characterPassive', null, {});
	},
};

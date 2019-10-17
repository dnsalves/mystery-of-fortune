module.exports = {
	up: queryInterface => {
		return queryInterface.bulkInsert(
			'characterWeapon',
			[
				{ name: 'Sword', created_at: new Date(), updated_at: new Date() },
				{ name: 'Bow', created_at: new Date(), updated_at: new Date() },
				{ name: 'Cross Bow', created_at: new Date(), updated_at: new Date() },
				{ name: 'Staff', created_at: new Date(), updated_at: new Date() },
				{ name: 'Gun', created_at: new Date(), updated_at: new Date() },
				{ name: 'Lance', created_at: new Date(), updated_at: new Date() },
				{ name: 'Book', created_at: new Date(), updated_at: new Date() },
				{
					name: 'Two Hands Sword',
					created_at: new Date(),
					updated_at: new Date(),
				},
				{ name: 'Cannon', created_at: new Date(), updated_at: new Date() },
				{ name: 'Spear', created_at: new Date(), updated_at: new Date() },
			],
			{}
		);
	},

	down: queryInterface =>
		queryInterface.bulkDelete('characterWeapon', null, {}),
};

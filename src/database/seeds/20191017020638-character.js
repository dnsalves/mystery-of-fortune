module.exports = {
	up: queryInterface => {
		return queryInterface.bulkInsert(
			'character',
			[
				{
					class: 'Soldier',
					hp: 1,
					att: 2,
					mag: 1,
					def: 1,
					m_def: 1,
					speed: 1,
					critical: 1,
					ratio: 2,
					range: 1,
					passive_id: 1,
					weapon_id: 1,
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					class: 'Archer',
					hp: 1,
					att: 2,
					mag: 1,
					def: 1,
					m_def: 1,
					speed: 1,
					critical: 1,
					ratio: 2,
					range: 3,
					passive_id: 1,
					weapon_id: 1,
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					class: 'Scout',
					hp: 1,
					att: 3,
					mag: 1,
					def: 1,
					m_def: 1,
					speed: 1,
					critical: 1,
					ratio: 3,
					range: 4,
					passive_id: 1,
					weapon_id: 1,
					created_at: new Date(),
					updated_at: new Date(),
				},
			],
			{}
		);
	},

	down: queryInterface => {
		return queryInterface.bulkDelete('character', null, {});
	},
};

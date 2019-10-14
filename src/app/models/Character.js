import Sequelize, { Model } from 'sequelize';

class Character extends Model {
	static init(sequelize) {
		super.init(
			{
				class: Sequelize.STRING,
				hp: Sequelize.SMALLINT,
				att: Sequelize.SMALLINT,
				mag: Sequelize.SMALLINT,
				def: Sequelize.SMALLINT,
				m_def: Sequelize.SMALLINT,
				speed: Sequelize.SMALLINT,
				critical: Sequelize.SMALLINT,
				ratio: Sequelize.SMALLINT,
				range: Sequelize.SMALLINT,
				weapon_id: Sequelize.INTEGER,
				passive_id: Sequelize.INTEGER,
			},
			{ sequelize, modelName: 'character' }
		);

		return this;
	}

	// static associate(models) {
	// 	models.map(m => m.name === 'CharacterUnlock' && this.hasMany(m));
	// }
	static associate(models) {
		this.hasMany(models.CharacterUnlock);
	}
}

export default Character;

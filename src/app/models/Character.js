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
				mDef: Sequelize.SMALLINT,
				speed: Sequelize.SMALLINT,
				critical: Sequelize.SMALLINT,
				ratio: Sequelize.SMALLINT,
				range: Sequelize.SMALLINT,
				weaponId: Sequelize.INTEGER,
				passiveId: Sequelize.INTEGER,
			},
			{ sequelize, modelName: 'character' }
		);

		return this;
	}

	static associate(models) {
		this.hasMany(models.CharacterUnlock);
		this.hasOne(models.characterPassive);
	}
}

export default Character;

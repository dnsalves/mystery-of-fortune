import Sequelize, { Model } from 'sequelize';

class CharacterUnlock extends Model {
	static init(sequelize) {
		super.init(
			{
				character_id: Sequelize.INTEGER,
				level: Sequelize.INTEGER,
			},
			{ sequelize, modelName: 'CharactersUnlock' }
		);

		return this;
	}
}

export default CharacterUnlock;

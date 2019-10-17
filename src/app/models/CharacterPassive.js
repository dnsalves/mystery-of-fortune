import Sequelize, { Model } from 'sequelize';

class CharacterPassive extends Model {
	static init(sequelize) {
		super.init(
			{ name: Sequelize.STRING },
			{ sequelize, modelName: 'characterPassive' }
		);
		return this;
	}
}

export default CharacterPassive;

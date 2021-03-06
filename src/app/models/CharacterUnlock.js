import Sequelize, { Model } from 'sequelize';

class CharacterUnlock extends Model {
	static init(sequelize) {
		super.init(
			{ level: Sequelize.INTEGER },
			{ sequelize, tableName: 'characterUnlock' }
		);
		return this;
	}

	static associate(models) {
		this.belongsTo(models.character);
	}
}

export default CharacterUnlock;

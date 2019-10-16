import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import Character from '../app/models/Character';
import CharacterUnlock from '../app/models/CharacterUnlock';
import CharacterPassive from '../app/models/CharacterPassive';

import databaseConfig from '../config/database';

const models = [Character, CharacterUnlock, CharacterPassive];

class Database {
	constructor() {
		this.init();
		// this.mongo();
	}

	init() {
		this.connection = new Sequelize(databaseConfig);

		models
			.map(model => model.init(this.connection))
			.map(model => model.associate && model.associate(this.connection.models));
	}

	mongo() {
		this.mongoConnection = mongoose.connect(
			'mongodb://localhost:27017/database',
			{
				useNewUrlParser: true,
				useFindAndModify: true,
				useUnifiedTopology: true,
			}
		);
	}
}

export default new Database();

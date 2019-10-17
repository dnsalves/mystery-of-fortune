import Character from '../models/Character';
import CharacterUnlock from '../models/CharacterUnlock';
import CharacterPassive from '../models/CharacterPassive';

class CharacterController {
	async store(req, res) {
		const user = await Character.create(req.body);

		return res.json(user);
	}

	async index(req, res) {
		const { id, name } = req.params;

		let user = new Character();
		const attributes = [
			'class',
			'hp',
			'att',
			'mag',
			'def',
			'mDef',
			'speed',
			'critical',
			'ratio',
			'range',
		];

		const include = [
			{
				model: CharacterUnlock,
				include: [{ model: Character, attributes: ['id', 'class'] }],
			},
			{
				model: CharacterPassive,
				attributes: ['name'],
			},
		];

		if (id > 0) {
			user = await Character.findByPk(id, { attributes, include });
		} else if (name) {
			user = await Character.findAll({
				attributes,
				include,
				where: { class: name },
			});
		}

		return res.json(user);
	}
}

export default new CharacterController();

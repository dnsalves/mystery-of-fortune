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
		if (id > 0) {
			user = await Character.findByPk(id, {
				include: [
					// { model: CharacterPassive },
					{
						model: CharacterUnlock,
						include: [{ model: Character, attributes: ['id', 'class'] }],
					},
				],
			});
		} else if (name) {
			user = await Character.findAll({
				where: { class: name },
				include: [{ model: CharacterUnlock }],
			});
		}

		return res.json(user);
	}
}

export default new CharacterController();

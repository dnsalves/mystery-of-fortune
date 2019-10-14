import Character from '../models/Character';

class CharacterController {
	async store(req, res) {
		const user = await Character.create(req.body);

		return res.json(user);
	}

	async index(req, res) {
		const user = await Character.findByPk(1, {
			include: [{ all: true }],
		});
		return res.json(user);
	}
}

export default new CharacterController();

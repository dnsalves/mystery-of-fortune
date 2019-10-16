import CharacterUnlock from '../models/CharacterUnlock';

class CharacterUnlockController {
	async store(req, res) {
		const user = await CharacterUnlock.create(req.body);

		return res.json(user);
	}

	async index(req, res) {
		const user = await CharacterUnlock.findByPk(1, {
			include: [{ all: true }],
		});
		return res.json(user);
	}
}

export default new CharacterUnlockController();

import { Router } from 'express';

import CharacterController from './app/controllers/CharacterController';
import CharacterUnlock from './app/controllers/CharacterUnlockController';

const routes = new Router();

routes.get('/character/id/:id', CharacterController.index);
routes.get('/character/name/:name', CharacterController.index);
routes.post('/character', CharacterController.store);

routes.get('/character-unlock', CharacterUnlock.index);
routes.post('/character-unlock', CharacterUnlock.store);

export default routes;

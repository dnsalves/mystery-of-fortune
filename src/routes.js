import { Router } from 'express';

import CharacterController from './app/controllers/CharacterController';

const routes = new Router();

routes.get('/character', CharacterController.index);
routes.post('/character', CharacterController.store);

export default routes;

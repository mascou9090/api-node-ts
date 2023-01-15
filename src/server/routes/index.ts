import { Router } from 'express';

import { CidadesController } from './../controllers';

const router = Router();

router.get('/', (req, res) => res.send('Olá, DEV'));

router.post('/cidades', CidadesController.create);


export { router };

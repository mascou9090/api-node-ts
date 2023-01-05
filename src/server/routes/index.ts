import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.send('Olá, DEV'));

router.post('/test/', (req, res) => {
    console.log(req.body);
    res.json(req.cookies);
});


export { router };

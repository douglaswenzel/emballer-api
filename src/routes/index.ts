import { Router, Request, Response } from 'express';
import andarRoutes from './andar.routes';
import salaRoutes from './sala.routes';

const router: Router = Router();

router.use('/andares', andarRoutes);
router.use('/salas', salaRoutes); 

router.get('/', (req: Request, res: Response) => {
    res.status(200).send({ message: 'Acesso às rotas API OK.' });
});

export default router;
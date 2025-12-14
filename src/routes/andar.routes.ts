import { Router } from 'express';
import andarController from '../controller/andar.controller';

const router: Router = Router();

router.get('/', andarController.listarAndares);

export default router;
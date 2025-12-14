import { Router } from 'express';
import salaController from '../controller/sala.controller';

const router: Router = Router();

router.get('/', salaController.listarSalas);

export default router;
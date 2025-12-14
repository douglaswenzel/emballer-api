import { Request, Response } from 'express';
import db from '../models';

const Andar: any = db.Andar;

class AndarController {
    public async listarAndares(req: Request, res: Response): Promise<Response> {
        try {
            const andares = await Andar.findAll({
                attributes: ['id_andar', 'numero_andar'],
                order: [['numero_andar', 'ASC']]
            });
            return res.status(200).json(andares);
        } catch (error: any) {
            console.error(error);
            return res.status(500).json({ 
                message: "Erro ao buscar andares.", 
                error: error.message 
            });
        }
    }
}

export default new AndarController();
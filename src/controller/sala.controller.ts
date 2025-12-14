import { Request, Response } from 'express';
import db from '../models';

const Sala: any = db.Sala;
const Andar: any = db.Andar;

class SalaController {
    public async listarSalas(req: Request, res: Response): Promise<Response> {
        try {
            const salas = await Sala.findAll({
                include: [{
                    model: Andar,
                    as: 'andar',
                    attributes: ['numero_andar']
                }],
                attributes: ['id_sala', 'identificacao_completa'],
                order: [['identificacao_completa', 'ASC']]
            });
            return res.status(200).json(salas);
        } catch (error: any) {
            console.error(error);
            return res.status(500).json({ 
                message: "Erro ao buscar salas.", 
                error: error.message 
            });
        }
    }
}

export default new SalaController();
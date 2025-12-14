const db = require('../../models');

const Sala = db.Sala;

class SalaController {
    async listarSalas(req, res) {
        try {
            const salas = await Sala.findAll({
                include: [{
                    model: db.Andar,
                    as: 'andar',
                    attributes: ['numero_andar']
                }],
                attributes: ['id_sala', 'identificacao_completa'],
                order: [['identificacao_completa', 'ASC']]
            });
            return res.status(200).json(salas);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ 
                message: "Erro ao buscar salas.", 
                error: error.message 
            });
        }
    }
}

module.exports = new SalaController();
const db = require('../../models');

const Andar = db.Andar;

class AndarController {
    async listarAndares(req, res) {
        try {
            const andares = await Andar.findAll({
                attributes: ['id_andar', 'numero_andar'],
                order: [['numero_andar', 'ASC']]
            });
            return res.status(200).json(andares);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ 
                message: "Erro ao buscar andares.", 
                error: error.message 
            });
        }
    }
}

module.exports = new AndarController();
import Evento from '../models/evento.js'

class EventosController {
    static async listarEventos(req, res) {
        try {
            const resultado = await Evento.pegaEventos();
            return res.status(200).json(resultado);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

export default EventosController;
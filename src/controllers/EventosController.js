import Evento from '../models/evento.js'

class EventosController {
    static liberaAcessoEventos = () => process.env.EVENTO_FLAG === 'true';

    static async listarEventos(req, res) {
        if (EventosController.liberaAcessoEventos()) {
            try {
                const resultado = await Evento.pegaEventos();
                return res.status(200).json(resultado);
            } catch (error) {
                return res.status(500).json({ message: error.message });
            }
        } else {
            return res.status(404).send();
        }
    }
}

export default EventosController;
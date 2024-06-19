import express from 'express';
import EventosController from '../controllers/EventosController.js';

const router = express.Router();

router
    .get('/eventos', EventosController.listarEventos)
/*     .get('/eventos/:id', EventosController.listarEventoPorId)
    .get('/eventos/:id/livros', EventosController.listarLivrosPorEvento)
    .post('/eventos', EventosController.cadastrarEvento)
    .put('/eventos/:id', EventosController.atualizarEvento)
    .delete('/eventos/:id', EventosController.excluirEvento); */

export default router;

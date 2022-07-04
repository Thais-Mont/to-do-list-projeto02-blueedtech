const router = require('express').Router();
const controllerTarefas = require('../controllers/tarefa.controller');
const {
  validId,
  validObjectBody,
} = require('../middlewares/tarefa.middlewares');

router.get('/all-tarefas', controllerTarefas.findAllTarefasController);
router.get('/tarefa/:id', validId, controllerTarefas.findByIdTarefaController);
router.post(
  '/create-tarefa',
  validObjectBody,
  controllerTarefas.createTarefaController,
);
router.put(
  '/update-tarefa/:id',
  validId,
  validObjectBody,
  controllerTarefas.updateTarefaController,
);
router.delete(
  '/delete-tarefa/:id',
  validId,
  controllerTarefas.deleteTarefaController,
);

module.exports = router;

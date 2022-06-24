const router = require('express').Router();
const controllerTarefas = require('../controllers/tarefa.controller');

router.get('/all-tarefas', controllerTarefas.findAllTarefasController);
router.get('/tarefa/:id', controllerTarefas.findByIdTarefaController);
router.post('/create-tarefa', controllerTarefas.createTarefaController);
router.put('/update-tarefa/:id', controllerTarefas.updateTarefaController);
router.delete('/delete-tarefa/:id', controllerTarefas.deleteTarefaController);

module.exports = router;

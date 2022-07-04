const tarefasService = require('../services/tarefa.service');

const findAllTarefasController = async (req, res) => {
  const alltarefas = await tarefasService.findAllTarefasService();
  if (alltarefas.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existem tarefas cadastradas!' });
  }
  res.send(alltarefas);
};

const findByIdTarefaController = async (req, res) => {
  const idParam = req.params.id;
  const chosenTarefa = await tarefasService.findByIdTarefaService(idParam);
  if (!chosenTarefa) {
    return res.status(404).send({ message: 'Tarefa não encontrada' });
  }
  res.send(chosenTarefa);
};

const createTarefaController = async (req, res) => {
  const tarefa = req.body;
  const newTarefa = await tarefasService.createTarefaService(tarefa);
  res.status(201).send(newTarefa);
};

const updateTarefaController = async (req, res) => {
  const idParam = req.params.id;
  const editTarefa = req.body;
  const updatedTarefa = await tarefasService.updateTarefaService(
    idParam,
    editTarefa,
  );
  res.send(updatedTarefa);
};

const deleteTarefaController = async (req, res) => {
  const idParam = req.params.id;
  await tarefasService.deleteTarefaService(idParam);
  res.send({ message: 'Tarefa deletada com sucesso!' });
};

module.exports = {
  findAllTarefasController,
  findByIdTarefaController,
  createTarefaController,
  updateTarefaController,
  deleteTarefaController,
};

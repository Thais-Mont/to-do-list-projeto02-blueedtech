const tarefasService = require('../services/tarefa.service');
const mongoose = require('mongoose');

const findAllTarefasController = async (req, res) => {
  const alltarefas = await tarefasService.findAllTarefasService();
  res.send(alltarefas);
};

const findByIdTarefaController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id Inválido!' });
  }

  const chosenTarefa = await tarefasService.findByIdTarefaService(idParam);

  if (!chosenTarefa) {
    return res.status(404).send({ message: 'Tarefa não encontrada' });
  }

  res.send(chosenTarefa);
};

const createTarefaController = async (req, res) => {
  const tarefa = req.body;
  const newTarefa = await tarefasService.createTarefaService(tarefa);
  res.send(newTarefa);
};

const updateTarefaController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id Inválido!' });
  }

  const editTarefa = req.body;
  const updatedTarefa = await tarefasService.updateTarefaService(
    idParam,
    editTarefa,
  );
  res.send(updatedTarefa);
};

const deleteTarefaController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id Inválido!' });
  }

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

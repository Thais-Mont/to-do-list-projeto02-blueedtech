const Tarefas = require('../models/Tarefa');

const findAllTarefasService = async () => {
  const allTarefas = await Tarefas.find();
  return allTarefas;
};

const findByIdTarefaService = async (idParam) => {
  const oneTarefa = await Tarefas.findById(idParam);
  return oneTarefa;
};

const createTarefaService = async (newTarefa) => {
  const createdTarefa = await Tarefas.create(newTarefa);
  return createdTarefa;
};

const updateTarefaService = async (idParam, editTarefa) => {
  const updateTarefa = await Tarefas.findByIdAndUpdate(idParam, editTarefa);
  return updateTarefa;
};

const deleteTarefaService = async (idParam) => {
  return await Tarefas.findByIdAndDelete(idParam);
};

module.exports = {
  findAllTarefasService,
  findByIdTarefaService,
  createTarefaService,
  updateTarefaService,
  deleteTarefaService,
};

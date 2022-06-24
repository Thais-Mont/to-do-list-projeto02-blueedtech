const mongoose = require('mongoose');

const TarefaSchema = new mongoose.Schema({
  tarefa: {
    type: String,
    require: true
  },
  descricao: {
    type: String,
    require: true
  }, 
  data: {
    type: String,
    require: true
  },
  turno: {
    type: String,
    require: true
  },
});

const Tarefa = mongoose.model('tarefas', TarefaSchema);

module.exports = Tarefa;


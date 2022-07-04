const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id Inválido!' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const tarefa = req.body;
  if (!tarefa || !tarefa.descricao || !tarefa.data || !tarefa.turno) {
    return res.status(400).send({ message: 'Preencha todos os campos!' });
  }
  next();
};

module.exports = {
  validId,
  validObjectBody,
};

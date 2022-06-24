const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect('mongodb://localhost:27017/to-do-list', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDb CONNECT!'))
    .catch((err) => {
      console.log(`Erro ao conectar com o MongoDB, erro: ${err}`);
    });
};

module.exports = connectToDatabase;

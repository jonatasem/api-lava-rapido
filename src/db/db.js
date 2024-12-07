const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // Carrega variáveis do arquivo .env

mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
}).then(() => {
    console.log("Conectado ao MongoDB");
}).catch(err => {
    console.error("Erro ao conectar ao MongoDB:", err);
});

module.exports = mongoose;
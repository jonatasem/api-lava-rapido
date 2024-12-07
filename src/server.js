const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const appointmentRoutes = require('./routes/appointments');
const serviceRoutes = require('./routes/services');
const usuarioRoutes = require('./routes/usuarios');
const dotenv = require('dotenv');
const mongoose = require('./db/db');

dotenv.config(); // Carregar variáveis do ambiente

const app = express();
app.use(cors()); // Habilitando CORS para todas as rotas
app.use(bodyParser.json());

app.use('/api/appointments', appointmentRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/usuarios', usuarioRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
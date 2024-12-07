const mongoose = require('mongoose');

const agendamentoSchema = new mongoose.Schema({
    cliente: {
        nome: String,
        telefone: String,
        veiculos: [
            {
                modelo: String,
                marca: String,
                ano: Number,
                placa: String,
            },
        ],
    },
    data: { type: Date, default: Date.now },
    status: {
        type: String,
        enum: ['aguardando lavagem', 'em andamento', 'concluído'],
        default: 'aguardando lavagem',
    },
});

module.exports = mongoose.model('Agendamento', agendamentoSchema);
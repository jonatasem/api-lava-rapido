const express = require('express');
const Servico = require('../models/Servico');
const router = express.Router();

// Listar serviços
router.get('/', async (req, res) => {
    try {
        const servicos = await Servico.find();
        res.json(servicos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Criar novo serviço
router.post('/', async (req, res) => {
    const servico = new Servico(req.body);
    try {
        await servico.save();
        res.status(201).json(servico);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;

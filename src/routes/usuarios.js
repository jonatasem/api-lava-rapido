const express = require('express');
const Usuario = require('../models/Usuario');
const router = express.Router();

// Criar novo usuário
router.post('/', async (req, res) => {
    const usuario = new Usuario(req.body);
    try {
        await usuario.save();
        res.status(201).send(usuario);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Listar usuários
router.get('/', async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.send(usuarios);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Editar usuário
router.put('/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!usuario) return res.status(404).send();
        res.send(usuario);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Excluir usuário
router.delete('/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndDelete(req.params.id);
        if (!usuario) return res.status(404).send();
        res.send(usuario);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
'use strict';

const express = require('express');
const router = express.Router();
const { Clothes } = require('../models/index');

router.get('/clothes', getAll);
router.post('/clothes', create);

async function getAll(req, res) {
    let clothes = await Clothes.getAll();
    res.status(200).json(clothes);
}

async function create(req, res) {
    let clothes = req.body;
    //must have an email

    let clothes1 = await Clothes.create(clothes);
    res.status(201).json(clothes1);
}

module.exports = router;
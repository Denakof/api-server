"use strict";

const express = require("express");
const router = express.Router();
const { Food } = require("../models/index");

router.get('/food', getAll);
router.post('/food', create);

async function getAll(req, res) {
  let food1 = await Food.getAll();
  res.status(200).json(food1);
}

async function create(req, res) {
  let food = req.body;

  let food1 = await Food.create(food);
  res.status(201).json(food1);
}

module.exports = router;

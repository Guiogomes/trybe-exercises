const express = require('express');
const router = express.Router();
const { getAll, getById, create } = require('./controllers/books');
router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);

module.exports = router;
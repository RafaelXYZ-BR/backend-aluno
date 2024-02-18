const express = require('express');
const alunoController = require ('../controllers/alunoController.js');
const router = express.Router();

router.post('/aluno', alunoController.Insert);

module.exports = router;

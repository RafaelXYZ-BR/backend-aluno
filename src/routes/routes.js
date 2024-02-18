const express = require('express');
const alunoController = require ('../controllers/alunoController.js');
const router = express.Router();

router.post('/aluno', alunoController.Insert);
router.get('/aluno', alunoController.SelectAll);
router.get('/aluno/:id', alunoController.SelectDetail);

module.exports = router;

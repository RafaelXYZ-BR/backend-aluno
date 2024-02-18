const express = require('express');
const alunoController = require ('../controllers/alunoController.js');
const router = express.Router();

router.post('/aluno', alunoController.Insert);
router.get('/aluno', alunoController.SelectAll);
router.get('/aluno/:id', alunoController.SelectDetail);
router.put('/aluno/:id', alunoController.Update);
router.delete('/aluno/:id', alunoController.Delete);

module.exports = router;

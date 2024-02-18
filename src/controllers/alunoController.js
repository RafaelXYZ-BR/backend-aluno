//Define a utilização do model aluno e a dependência http-status
const aluno = require('../models/aluno');
const status = require('http-status');

// Cria o método Insert, obtendo os dados da request
exports.Insert = (req, res, next) => {
    const nome = req.body.nome;
    const ra = req.body.ra;
    const dataNascimento = req.body.dataNascimento;
    const ativo = req.body.ativo;

// Popula cada um dos campos do model com os campos recebidos na request
aluno.create({
    nome: nome,
    ra: ra,
    dataNascimento: dataNascimento,
    ativo: ativo,
})
//then = registra o que queremos que aconteça quando a Promise for resolvida
.then(aluno => {
    if (aluno) {
        res.status(status.OK).send(aluno);
    } else{
        res.status(status.NOT_FOUND).send();
    }
})
//catch = registra o que queremos que aconteça quando a Promise falhar
.catch(error => next(error));
};
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
exports.SelectAll = (req, res, next) => {
    aluno.findAll()
    .then(aluno => {
        if(aluno) {
            res.status(status.OK).send(aluno);
        }
    })
    .catch(error => next(error));
}

exports.SelectDetail = (req, res, next) => {
    const id = req.params.id;

    aluno.findByPk(id)
    .then(aluno => {
        if(aluno) {
            res.status(status.OK).send(aluno);
        }
    })
    .catch(error => next(error));
};

exports.Update = (req, res, next) => {
    const id = req.params.id;
    const nome = req.body.nome;
    const ra = req.body.ra;
    const dataNascimento = req.body.dataNascimento;
    const ativo = req.body.ativo;

    aluno.findByPk(id)
    .then(aluno => {
        if (aluno) {
            aluno.update({
                nome:nome,
                ra: ra,
                dataNascimento: dataNascimento,
                ativo: ativo
            },
            {
                where: { id: id}
            })
            .then(() => {
                res.status(status.OK).send();
            })
            .catch(error => next(error));
        }else{
            res.status(status.NOT_FOUND).send();
        }
    })
    .catch(error => next(error));
};

exports.Delete = (req, res, next) => {
    const id = req.params.id;

    aluno.findByPk(id)
    .then(aluno => {
        if (aluno) {
            aluno.destroy({
                where: { id: id}
            })
            .then (() => {
                res.status(status.OK).send();
            })
            .catch(error => next(error));
        }
        else{
            res.status(status.NOT_FOUND).send();
        }
    })
    .catch(error => next(error));
};
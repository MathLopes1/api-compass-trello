const roteador = require('express').Router({mergeParams: true})
const Tabela = require ('./tabelaTasks')

roteador.get('/', async (requisicao, resposta) => {
    const tasks = await Tabela.listar(requisicao.params.idProject)
    resposta.send(
        JSON.stringify(tasks)
    )
})

module.exports = roteador
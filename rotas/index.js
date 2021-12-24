const roteador = require('express').Router()
const TabelaProject = require('./tabelaProject')

roteador.use('/', async (requisicao, resposta) => {
    const resultados = await TabelaProject.listar()
    resposta.send(
        JSON.stringify(resultados)
    )
})

module.exports = roteador

const roteador = require('express').Router()
const TabelaProject = require('./tabelaProject')
const Project = require('./project')

//Ação de listagem
roteador.get('/', async (requisicao, resposta) => {
    const resultados = await TabelaProject.listar()
    resposta.send(
        JSON.stringify(resultados)
    )
})

//Ação de criação
roteador.post('/', async(requisicao, resposta) => {
    const dadosRecebidos = requisicao.body
    const project = new Project(dadosRecebidos)
    await project.criar()
    resposta.send(
        JSON.stringify(project)
    )
})

module.exports = roteador

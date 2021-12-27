const roteador = require('express').Router({mergeParams: true})
const Tabela = require ('./tabelaTasks')
const Task = require('./task')

roteador.get('/', async (requisicao, resposta) => {
    const tasks = await Tabela.listar(requisicao.params.idProject)
    resposta.send(
        JSON.stringify(tasks)
    )
})

roteador.post('/', async (requisicao, resposta) => {
    const idProject = requisicao.params.idProject
    const corpo = requisicao.body
    const dados = Object.assign({}, corpo, {ProjectId: idProject})
    const task = new Task(dados)
    await task.criar()
    resposta.status(201)    
    resposta.send(task)
})

module.exports = roteador
const roteador = require('express').Router({mergeParams: true})
const Tabela = require ('./tabelaTasks')
const Task = require('./task')

roteador.get('/', async (requisicao, resposta) => {
    const tasks = await Tabela.listar(requisicao.params.idProject)
    resposta.status(200)
    resposta.send(
        JSON.stringify(tasks)
    )
})

roteador.post('/', async (requisicao, resposta) => {
    const idProject = requisicao.params.idProject
    const corpo = requisicao.body
    const dados = Object.assign({}, corpo, {projectId: idProject})
    const task = new Task(dados)
    await task.criar()
    resposta.status(201)    
    resposta.send(task)
})

roteador.delete('/:id', async (requisicao, resposta) =>{
    const dados = {
        id: requisicao.params.id,
        projectId: requisicao.params.projectId
    }

    const task = new Task(dados)
    await task.apagar()
    resposta.status(204)
    resposta.end()
})

module.exports = roteador
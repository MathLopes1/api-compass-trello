const roteador = require('express').Router()
const TabelaProject = require('./tabelaProject')
const Project = require('./project')

//Metodo de listagem
roteador.get('/', async (requisicao, resposta) => {
    const resultados = await TabelaProject.listar()
    resposta.status(200)
    resposta.send(
        JSON.stringify(resultados)
    )
})

//Metodo de criação
roteador.post('/', async (requisicao, resposta) => {
try{
    const dadosRecebidos = requisicao.body
    const project = new Project(dadosRecebidos)
    await project.criar()
    resposta.status(201)
    resposta.send(
        JSON.stringify(project)
    )
} catch (erro){
    resposta.status(400)
    resposta.send(
       JSON.stringify({
           mensagem: erro.message
       }) 
     )
    }
})

//Metodo de captura detalhada
roteador.get('/:idProject', async (requisicao, resposta) => {
    try {
        const id = requisicao.params.idProject
        const project = new Project({ id: id })
        await project.carregar()
        resposta.status(200)
        resposta.send(
            JSON.stringify(project)
        )
    } catch (erro) {
        resposta.status(404)
        resposta.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }
}
)

//Metodo para atualizar informações
roteador.put('/:idProject', async (requisicao, resposta) => {
    try {
        const id = requisicao.params.idProject
        const dadosRecebidos = requisicao.body
        const dados = Object.assign({}, dadosRecebidos, { id: id })
        const project = new Project(dados)
        await project.atualizar()
        resposta.status(200)
        resposta.end()
    } catch (erro){
        resposta.status(404)
        resposta.send(
            JSON.stringify({
               mensagem: erro.message 
            })
        )
    }

})

///Metodo para deletar 
roteador.delete('/:idProject', async (requisicao, resposta) => {
   try{
    const id = requisicao.params.idProject
    const project = new Project({ id : id })
    await project.carregar() 
    await project.remover()
    resposta.status(204)
   resposta.end()
   } catch(erro){
    resposta.status(404)
    resposta.send(
        JSON.stringify({
           mensagem: erro.message 

        })
    )}
})

const roteadorTasks = require('./tasks')
roteador.use('/:idProject/tasks', roteadorTasks)

module.exports = roteador

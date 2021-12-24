const roteador = require('express').Router()
const TabelaProject = require('./tabelaProject')
const Project = require('./project')

//Metodo de listagem
roteador.get('/', async (requisicao, resposta) => {
    const resultados = await TabelaProject.listar()
    resposta.send(
        JSON.stringify(resultados)
    )
})

//Metodo de criação
roteador.post('/', async (requisicao, resposta) => {
    const dadosRecebidos = requisicao.body
    const project = new Project(dadosRecebidos)
    await project.criar()
    resposta.send(
        JSON.stringify(project)
    )
})

//Metodo de captura detalhada
roteador.get('/:idProject', async (requisicao, resposta) => {
    try {
        const id = requisicao.params.idProject
        const project = new Project({ id: id })
        await project.carregar()
        resposta.send(
            JSON.stringify(project)
        )
    } catch (erro) {
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
        resposta.end()
    } catch (erro){
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
   resposta.end()
   } catch(erro){
    resposta.send(
        JSON.stringify({
           mensagem: erro.message 
           
        })
    )}
})


module.exports = roteador

const modelos = [
    require('../rotas/modeloTabela'),
    require('../rotas/tasks/modeloTabelaTask')
 ]
 
 //Criando os modelos de Tabelas
 async function criarTabelas () {
    for (let i = 0; i < modelos.length; i++) {
       const modelo = modelos[i]
       await modelo.sync()
    }
 }
 
criarTabelas()
const ModeloTabela = require('../rotas/modeloTabela')

ModeloTabela
    .sync()
    .then(() => console.log('Tabela Criada'))
    .catch(console.log)
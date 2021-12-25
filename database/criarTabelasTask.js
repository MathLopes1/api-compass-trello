const ModeloTabela = require('../rotas/modeloTabelaTask')

ModeloTabela
    .sync()
    .then(() => console.log('Tabela Criada'))
    .catch(console.log)
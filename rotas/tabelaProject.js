const Modelo = require('./modeloTabela')

module.exports = {
    listar(){
        return Modelo.findAll()
    }
}
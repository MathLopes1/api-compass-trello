const Modelo = require('./modeloTabela')

module.exports = {
    listar(){
        return Modelo.findAll()
    },

    inserir(project){
        return Modelo.create(project)
    }

}
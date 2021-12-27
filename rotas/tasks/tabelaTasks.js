const Modelo = require ('./modeloTabelaTask')

module.exports = {
    listar(idProject){
        return Modelo.findAll({
            where: {
                project : idProject
            }
        })
    }
}
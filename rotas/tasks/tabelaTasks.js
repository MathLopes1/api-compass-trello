const Modelo = require ('./modeloTabelaTask')

module.exports = {
    listar(idProject){
        return Modelo.findAll({
            where: {
                ProjectId : idProject
            }
        })
    },
    inserir(dados){
        return Modelo.create(dados)
    },
    remover(idProject, projectId){
        return Modelo.destroy({
            where: {
               id: projectId,
                projectId: idProject   
            }
        })
    }
}
const Tabela = require('./tabelaTasks')

class Task {
    constructor({title, taskRelevance, completed, projectId, createdAt, updatedAt}){
        this.title = title
        this.taskRelevance = taskRelevance
        this.completed = completed
        this.projectId = projectId
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
    async criar(){
        const resultado = await Tabela.inserir({
         title: this.title,
         taskRelevance: this.taskRelevance,
         completed : this.completed,  
        })

        this.id = resultado.id
        this.projectId= resultado.projectId 
        this.createdAt = resultado.createdAt
        this.updatedAt = resultado.updatedAt

    }
}

module.exports = Task
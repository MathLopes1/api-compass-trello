const Sequelize = require('sequelize')
const instancia = require('../database')

const colunas = {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    taskRelevance: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    completed: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tarefas: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: require('./ModeloTabela'),
          key: 'id'
        }
      }
    }
    
    const opcoes = {
      freezeTablename: true,
      tableName: 'tasks',
      timestamps: true
    }
    
    module.exports = instancia.define('tarefas', colunas, opcoes)


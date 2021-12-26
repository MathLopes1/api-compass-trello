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
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  tarefas: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: require('./ModeloTabela'),
      key: 'id'
    }
  },
  createdAt: {
    type: Sequelize.DATE,
    field: 'created_at',
    allowNull: false
  },
  updatedAt: {
    type: Sequelize.DATE,
    field: 'updated_at',
    allowNull: false
  }
}

const opcoes = {
  freezeTablename: true,
  tableName: 'tasks',
  timestamps: false
}

module.exports = instancia.define('tasks', colunas, opcoes)

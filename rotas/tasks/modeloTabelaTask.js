const Sequelize = require('sequelize')
const instancia = require('../../database')

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
  tasks: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: require('../modeloTabela'),
      key: 'id'
    }
  },
  createdAt: {
    type: Sequelize.DATE,
    field: 'createdAt',
    allowNull: false
  },
  updatedAt: {
    type: Sequelize.DATE,
    field: 'updatedAt',
    allowNull: false
  }
}

const opcoes = {
  freezeTablename: true,
  tableName: 'tasks',
  timestamps: true
}

module.exports = instancia.define('tasks', colunas, opcoes)

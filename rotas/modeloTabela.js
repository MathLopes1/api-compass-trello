const Sequelize = require('sequelize')
const instancia = require('../database')

const colunas = {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    task: {
        type: Sequelize.STRING,
        allowNull: false
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
    tableName: 'project',
    timestamps: true
}

module.exports = instancia.define('project', colunas, opcoes)
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('config')

app.use(bodyParser.json())

const roteador = require ('./rotas')
app.use('/api/project', roteador)

app.listen(config.get('api.porta'), () => console.log('API Compass - desafio1'))
'use strict'

require('./bot/brain')

const express = require('express')
const app = express()
const port = 3030

app.get('/', (request, response) => {
    response.send('Express on...')
})

app.use((err, request, response, next) => {
    console.log(err)
    response.status(500).send('Something broke!')
})

app.listen(port)
require('dotenv').config()

const express = require('express')

const app = express()

const port = 3000

app.get('/',(req, res) => {
    res.send(`Hello World`)
})

app.get('/twitter', (req, res) => {
    res.send(`souravBishtdotcom`)
})

app.get('/login', (req, res) => {
    res.send("<h1 style='color: red'>Sudama is Gay</h1>") 
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
})
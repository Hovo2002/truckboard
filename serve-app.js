const express = require('express');
const basicAuth = require('express-basic-auth')
const path = require('path');

const HOST = '0.0.0.0'
const PORT = 8080

const app = express()

app.use(basicAuth({
    users: { 'tbuser': 'Jp7dH5' },
    challenge: true,
}))

app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, HOST)

console.log(`Running on http://${HOST}:${PORT}`)

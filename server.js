const path = require('path')
const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/voluntarios', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/voluntarios.html'))
})
app.get('/reporte-hackerday2019', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/static/reporte-hackerday2019.pdf'))
})

app.listen(process.env.PORT || 3000, () => {
  console.log('Runing server on http://localhost:3000')
})

const express = require('express');
const path = require('path')
const app = express();

app.use(express.static('public'))

app.get('/voluntarios', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/voluntarios.html'))
})

app.listen(process.env.PORT || 3000, () => {
  console.log('Runing server on http://localhost:3000');
});

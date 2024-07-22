const express = require('express');

const app = express();

app.get('/message/:id/:user', (request, response) => {
  const {id, user} = request.params
   response.send(`Hello Word, id da mensagem ${id}, para o usuario ${user}`) 
})

app.get('/user', (request, response) => {
  const { page, limit } = request.query;
  response.send(`Page: ${page}. mostrar: ${limit} `)
})

const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})

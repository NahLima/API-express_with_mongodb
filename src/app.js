import express  from 'express';

const app = express();

app.use(express.json()) // reconhece o que foi enviado pelo body no postman

const livros = [
  {"id":1, "título":"Senhor dos aneis"},
  {"id":2, "título":"O Hobbit"},
]

app.get('/', (req, res) => {
  res.status(200).send('Livraria');
})

app.get('/livros', (req, res) => {
  res.status(200).json(livros)
})

app.get('/livros/:id', (req, res) => {
  let index = buscaLivro(req.params.id);
  res.json(livros[index])
})

app.post('/livros', (req, res) => {
  livros.push(req.body);
  res.status(201).send('Livro Cadastrado')
})

app.put('/livros/:id', (req, res) => {
  let index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.json(livros)
})

app.delete('/livros/:id', (req, res) => {
  let {id} = req.params;
  let index = buscaLivro(id);

  livros.splice(index, 1)
  
  res.send(`Livro com o id: ${id} foi deletado`)
})


function buscaLivro(id) {
  return livros.findIndex(livro => livro.id == id)
}
export default app
const express = require('express')

const app = express()

app.use(express.json())

app.get("/alunos", (req,res) => {
    console.log("Acessando dados da API")
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})

//CREATe (Criar)
app.post('/alunos', (req, res) => {
    //const novoItem = {id: idCouter++, nome: req.body.nome};
    //itens.push(novoItem); 
    //res.status(201).json(novoItem);
    res.send ("Enviando dados para API")
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})

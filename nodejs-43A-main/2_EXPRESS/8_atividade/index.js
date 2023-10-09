const express = require('express')
const app = express()

const path = require('path')
const basePath = path.join(__dirname, 'templates')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'))

app.get('/cadastrar', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.post('/cadastrar', (req, res) => {
    const {nome, email, senha} = req.body

    console.log(`
        Usuário: ${nome}
        E-mail: ${email}
        Senha: ${senha}
    `);

    res.redirect('/');
})

app.get('/premio', (req, res) => {
    res.sendFile(`${basePath}/premio.html`);
})

app.listen(5000)
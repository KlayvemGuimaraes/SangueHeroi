const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const viewsPath = path.join(__dirname, 'views');// Configurarando a pasta de views
console.log(`Views path: ${viewsPath}`);

app.set('views', viewsPath);
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));// Middleware p/ servir arquivos estáticos

app.get('/', (req, res) => {
    res.render('index', { pageTitle: 'Sangue Herói' })// Rota p/ a inicial
});

app.get('/sobre', (req, res) => {
    res.render('sobre', { pageTitle: 'Sobre Nós' });// Rota p/ o sobre
});

app.get('/prototipo', (req, res) => {
    res.render('prototipo', { pageTitle: 'Acesse o Protótipo' });// Rota p/ o protótipo
});

app.get('/saiba-mais', (req, res) => {
    res.render('saiba-mais', { pageTitle: 'Saiba Mais' });// Rota p/ o saiba mais
});

app.get('/contato', (req, res) => {
    res.render('contato', { pageTitle: 'Contato' });// Rota p/ o contato
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

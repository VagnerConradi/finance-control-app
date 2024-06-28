// server.js
const express = require('express');
const app = express();
const port = 3000; // Escolha uma porta adequada para o seu ambiente

app.use(express.static('public')); // Servir arquivos estáticos como index.html, styles.css, script.js

// Endpoint para autenticação simulada (substitua com lógica de autenticação real)
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Simulação de autenticação básica
    if (username === 'usuario' && password === 'senha') {
        res.redirect('/dashboard.html'); // Substitua 'dashboard.html' com sua página principal
    } else {
        res.status(401).send('Usuário ou senha incorretos.');
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

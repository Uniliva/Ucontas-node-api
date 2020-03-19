const express = require('express');
const router = require('./src/routers')
const auth = require('./src/controllers/auth')
const authMiddleware = require('./src/middlewares/auth');

const app = express();

//define aplication/json como mediaType padrão
app.use(express.json())

// defininso  porta atravel do variavel de ambiente
const port = process.env.PORT || 3000;

app.use('/auth', auth);
app.use('/', authMiddleware, router);

app.listen(port, () => console.log(`Escutando na porta: ${port}`));
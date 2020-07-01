const PORT = 3000;

const express = require('express');
const apiRoute = require('./routes/api');
const path = require('path');

const app = express();

//utilizar o metodo use para enviar a pasta public para o usuario, utilizando um middleware
app.use('/api', apiRoute)
app.use('/', express.static(path.join(__dirname, 'public')))


app.listen(PORT, () => {
    console.log('Server running on port', PORT);
})






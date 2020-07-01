//Duas rotas. Uma para pegar todos os dados e outra para adicionar um novo dado. Esses dados
// são os posts no mural de aviso.

const express = require('express');
const bodyParser = require('body-parser');
const posts = require('../model/posts');
const cors = require('cors');
const router = express.Router();

const options = {
    origin: 'http://localhost:3000'
}

router.use(cors(options));

router.get("/all", (req, res) => {
    res.json(JSON.stringify(posts.getAll()));
});

router.post("/new", bodyParser.json(), (req, res) => {
    
    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title, description);

    res.send("Post adicionado");
})

module.exports = router;
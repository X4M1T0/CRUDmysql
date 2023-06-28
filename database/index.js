// EXPRESS ==========>
const express = require('express');
const app = express();

// cor ==========>
const cors = require('cors'); // CONTROLE DE ERROS

// MYSQL ==========>
const mysql = require('mysql');
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "senha",
    database: "testecrud",
});

app.use(cors());
app.use(express.json());

app.post('/register', (req, res) => {
    const {nome} = req.body;
    const {email} = req.body;
    const {senha} = req.body;

    console.log(nome);

    let SQL = "INSERT INTO testecrud.usrdata(nome, email, senha) VALUES (? , ? , ?)";

    db.query(SQL, [nome, email, senha], (err, result) => {
        if(err) {console.log(err);}
        else {console.log(result);}
    });
});

const port = 3000;

app.listen(port, () => {
    console.log('Servidor ativo! Porta: ' + port);
});
// EXPRESS ==========>
const express = require('express');
const app = express();

// cor ==========>
const cors = require('cors'); // CONTROLE DE ERROS

app.use(cors());
app.use(express.json());

// MYSQL ==========>
const mysql = require('mysql');
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "senha",
    database: "testecrud",
});


// TEM VÁRIAS FORMAS DE REALIZAR O CRUD COM NODEJS

// 1º ==========> TENHO PREFERÊNCIA, O CONTROLE DOS DADOS É MAIOR

app.post('/register', (req, res) => {
    const {nome} = req.body;         // PRESTE MUITA ATENÇÃO AO PUXAR VARIÁVEIS DE DENTRO DE CHAVES COMO
    const {email} = req.body;        // NO CÓDIGO AO LADO. A NOME DA VAR DENTRO DAS CHAVES DEVE SER O MESMO
    const {senha} = req.body;        // QUE ESTÁ SENDO IMPLEMETADO DENTRO DO MÉTODO NO FRONT. SENÃO A CHAMADA
                                     // DEVE SER 'const nome = req.body.nome'
    console.log(nome);

    let SQL = "INSERT INTO testecrud.usrdata(nome, email, senha) VALUES (? , ? , ?)";

    db.query(SQL, [nome, email, senha], (err, result) => {
        if(err) {console.log(err);}
        else {console.log(result);}
    });
});

// 2º ==========>

/*app.post('/register', (req, res) => {
    const {nome} = req.body;
    const {email} = req.body;
    const {senha} = req.body;

    try{
        const SQL = await db.query('INSERT INTO usrdata(nome, email, senha) VALUES (?, ?, ?)', [nome, email, senha]);
        console.log(SQL);
        res.json(SQL); 
    } catch (err){
        console.log(err);
        return;
    }
})*/

// INICIALIZANDO SERVIDOR LOCAL
const port = 3001;

app.listen(port, () => {
    console.log('Servidor ativo! Porta: ' + port);
});

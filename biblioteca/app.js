const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const db = mysql.createConnection({
    host:'localhost',
    user:'mari',
    password:'SENAI123',
    database:'biblioteca'
});

db.connect((error)=>{
    if(error){
        console.log('Erro ao conectar banco de dados')
    } else{
        console.log('Conectado ao MySQL')
    }
});

const app = express();
const port = 3000;

app.listen(port)
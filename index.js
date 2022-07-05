const express = require('express');
const hbs  = require('hbs');
const app = express();
const http = require('http');
require('dotenv').config();
const port = process.env.PORT;


    app.set('view engine', 'hbs');
    hbs.registerPartials(__dirname + '/views/partials', function(err) {});
    app.use(express.static('public'));

    /*app.get('/',(req,res)=>{
        res.render('home',{
            nombre:'Juan',
            titulo:'adfsafsafsa',
            casa: 'A Casita Pete'
        });
    });
    
    app.get('/generic',(req,res)=>{
        res.render('generic',{
            nombre:'Juan',
            titulo:'adfsafsafsa',
            casa: 'A Casita Pete'
        });
    });
    app.get('/elements',(req,res)=>{
        res.render('elements',{
            nombre:'Juan',
            titulo:'adfsafsafsa',
            casa: 'A Casita Pete'
        });
    });*/
    app.get('*',(req,res)=>{
        res.sendFile(__dirname + '/public/index.html');
    });
    app.listen(port,()=>{
       console.log(`Example app listeninng at http://localhost:${port}`)
    });

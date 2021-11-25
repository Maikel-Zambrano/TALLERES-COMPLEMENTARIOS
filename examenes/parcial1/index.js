const mongoose = require('mongoose');
const axios = require('axios');
const cheerio = require('cheerio');
const cron = require('node-cron');
const express = require('express');
const fs = require("fs");
const cors = require("cors")

require('dotenv').config();
const Server =  require('./server');
const {Membresia}  = require('./models');
const server =  new Server();
server.listen();
      
const PUERTO = 5702;
const index= fs.readFileSync("./index.html");

const servidor = express();
servidor.use(cors()).use(express.json());

servidor.get('/index', findex);

// const {dbConnection}= require('./config')


function findex (req, response){
    response.write(index);
    response.end();
}

servidor.listen(PUERTO, ()=>{
    console.log(`Servidor ejecutando http://localhost:${PUERTO}`);
})

cron.schedule("* * * * *", async()=>{
    try{
        //const conexion = await mongoose.connect(dbConnection);

        const html = await axios.get("http://localhost:5702/index");
        const $ = cheerio.load(html.data);
        const membresia= $(".container_table")

        let arregloMembresias=[];

        membresia.each((index, element)=>{
            const Membresias={
                
                fechaInicio:$(element).children('.fecha_fin').text(),
                fechaFinal:$(element).children('.fecha_fin').text(),
                cliente:$(element).children('.cliente').text(),
                estado:$(element).children('.estado').text(),
                costo:$(element).children('.costo').text(),
                tipo:$(element).children('.tipo').text()
            }
            arregloMembresias=[... arregloMembresias, Membresias];
        })

        await Membresia.create(arregloMembresias);

    }catch(err){
        console.log(err) 
    }
})
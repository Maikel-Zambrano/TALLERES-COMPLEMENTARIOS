const fs = require("fs");
const http = require("http");

const cors = require("cors")
const express = require("express")
const path = require("path");

const {dbConnection}= require('./config/index')

class Server{
    constructor(){
        this.app= express();
        this.port=8080;
        // this.index= fs.readFileSync("./index.html");

        this.paths={membresias:'/api/membresias'}
        this.conectarDB();
        this.middlewares();
        this.routes();
}

        async conectarDB(){
            await dbConnection();
        }

        middlewares(){
            this.app.use(cors());
            this.app.use(express.json());
            
        }

        routes(){
            this.app.use( this.paths.membresias  , require('./routes/membresia') )
            
        }

        listen(){
            this.app.listen(this.port, ()=>{
                console.log(`Servidor corriendo en el puerto ${this.port}`)
            })
    
        }

        // mostrar(){
        //     this.app.get('/index', this.findex)
        // }

        // findex (req, response){
        //         response.write(index);
        //         response.end();
        //     }
        


    }

    module.exports= Server;
        
// const PUERTO = 8080;
// const index= fs.readFileSync("./index.html");

// const server = express();
// server.use(cors()).use(express.json());

// server.get('/index', findex);



// function findex (req, response){
//     response.write(index);
//     response.end();
// }

// server.listen(PUERTO, ()=>{
//     console.log(`Servidor ejecutando http://localhost:${PUERTO}`);
// })
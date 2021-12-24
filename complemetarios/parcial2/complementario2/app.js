const express =  require('express');
const cors  =  require('cors');

const { dbConnection } =  require('./src/config');

class Server {
    constructor(){
        this.app =  express();
        this.port = process.env.PORT;

        this.paths = {
            estudiantes: '/api/estudiantes'
        }

        this.conectarDB();
        this.middlewares();
        this.routes();
        
    }
    //// ASOCIAR RUTAS, MIDDLEWARES, LEVANTAR BASE DE DATOS
    async conectarDB(){
           await dbConnection();
    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        
    }
    routes(){
        this.app.use( this.paths.estudiantes  , require('./src/routes/estudiante') )
        
    }
    
    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Servidor corriendo en el puerto ${this.port}`)
        })

    }

}


module.exports = Server;

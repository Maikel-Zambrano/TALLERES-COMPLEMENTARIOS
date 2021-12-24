// const {connect} = require('mongoose');
// const {CADENA_CONEXION, PORT} = require('./src/config');
// const Server = require('./src/Startup');


// (async()=>
// {
//     await connect(CADENA_CONEXION, {useNewUrlParser:true, useUnifiedTopology:true}).then(()=>
//     {
//         console.log('Conexion exitosa con la base de datos');
//     }).catch(()=> console.log('No se pudo conectar'));
//     await Server.LevantarPuerto();
// })();



/// traer datos de configuracion   PUERTO Y LA CADENA DE CONEXION  MONGODB_CNN Y PORT
require('dotenv').config();
const Server =  require('./app');

/// crear una instancia del servidor y levantarlo

const server =  new Server();

///LEVANTAR EL SERVIDOR
server.listen();

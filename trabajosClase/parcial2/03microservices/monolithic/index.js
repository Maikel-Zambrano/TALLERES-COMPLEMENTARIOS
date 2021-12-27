const server = require('./src/app.js');
server.listen(process.env.PORT, ()=>{
    console.log(`monolithic server run... corriendo en puerto ${process.env.PORT}`)
});
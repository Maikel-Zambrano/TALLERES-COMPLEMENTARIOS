const server = require("./src/app");


server.listen(process.env.PORT, ()=>{
    console.log(`servicio de estudiante iniciado .... `)
})
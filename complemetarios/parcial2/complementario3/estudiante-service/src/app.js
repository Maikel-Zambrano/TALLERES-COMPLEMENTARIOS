const express = require("express");
const app = express()

const response={
    data:[],
    services:"Estudiante service",
    arquitecture:"Microservices"
}

app.use((req,res,next)=>{
    response.data=[];
    next();
})


app.get("/api/v2/estudiantes", (req,res)=>{
    response.data.push("Maikel","Genesis", "Stefanía");
    console.log(`Get estudiante data`)
    return res.send(response);
})




module.exports= app;
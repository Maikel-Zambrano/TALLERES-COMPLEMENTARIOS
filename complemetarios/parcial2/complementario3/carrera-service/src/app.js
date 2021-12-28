const express = require("express");
const app = express()

const response={
    data:[],
    services:"carreras-service",
    arquitecture:"Microservices"
}

app.use((req,res,next)=>{
    response.data=[];
    next();
})


app.get("/api/v2/carreras", (req,res)=>{
    response.data.push("IngenierIa en sistemas","IngenierIa en tecnologIa de la informaciOn");
    console.log(`Get carrera data`)
    return res.send(response);
})




module.exports= app;
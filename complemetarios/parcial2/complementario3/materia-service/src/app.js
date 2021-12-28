const express = require("express");
const app = express()

const response={
    data:[],
    services:"materias-service",
    arquitecture:"Microservices"
}
//let materias =[];

app.use((req,res,next)=>{
    response.data=[];
    next();
})


app.get("/api/v2/materias", (req,res)=>{
   response.data.push("aplicaciones web II","ingeniería de software II", "Seguridad de la informaciOn I");
    console.log(`Get matery data`)
    return res.send(response);
})



module.exports= app;
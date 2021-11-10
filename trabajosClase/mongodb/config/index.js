//extraemos el contenido del .env 
if(process.env.NODE_ENV !== "production"){
    require("dotenv").config();

}

//exportamos la variable de entorno
module.exports={
    MONGO_URI: process.env.MONGO_URI 
}

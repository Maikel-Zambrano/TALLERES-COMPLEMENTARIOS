if ( process.env.NODE_ENV !== "production" )
{
    require("dotenv").config();
}
//exportando la variable de entorno 
module.exports=
{
    MONGO_URI:process.env.MONGO_URI
}


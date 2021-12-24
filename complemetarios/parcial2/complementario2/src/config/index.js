// if ( process.env.NODE_ENV !== "production" )
// {
//     require("dotenv").config();
// }
// module.exports = 
// {
//     MONGO_URI:process.env.MONGO_URI,
//     PORT:process.env.PORT,
//     APPLICATION_NAME:process.env.APPLICATION_NAME
// }

const mongoose =  require('mongoose');
const dbConnection = async ()=>{
  try{
      await mongoose.connect(process.env.MONGO_URI)
      console.log('Base de datos corriendo....')
  }
  catch(error)
  {
      console.log(error);
      throw new Error('Error al iniciar la base de datos')
  }
  
}


module.exports ={
  dbConnection
}

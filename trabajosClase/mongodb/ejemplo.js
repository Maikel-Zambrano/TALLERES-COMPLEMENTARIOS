const mongoose= require("mongoose");
const conexion="mongodb+srv://Maikel_Zambrano:Maikel21@cluster0.xcosf.mongodb.net/complementarios?retryWrites=true&w=majority";


mongoose.connect(conexion).then(respuesta=>{
    //console.log(respuesta);
})

//hacemos un modelo para la insercion de datos 
const Usuario = mongoose.model("usuario", {nombre:String});

//definiendo el dato
const usuario1 = new Usuario ({nombre:"Maikel Zambrano"});

//guardamos el dato
usuario1.save();

usuario1.find().then(respuesta=>{
    console.log(respuesta);
})
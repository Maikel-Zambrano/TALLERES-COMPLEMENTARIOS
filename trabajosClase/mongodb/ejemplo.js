const mongoose= require("mongoose");
const conexion="mongodb+srv://Maikel_Zambrano:Maikel21@cluster0.xcosf.mongodb.net/complementarios?retryWrites=true&w=majority";

( async ()=>{
    const estado = await mongoose.connect(conexion);
    //hacemos un modelo para la insercion de datos 
    const Usuario = mongoose.model("usuario", {nombre:String});
    //definiendo el dato
    const usuario1 = new Usuario ({nombre:"Jesus Aguayo"});
    //guardamos el dato
    const guardoUsuario = await usuario1.save();
    const resultado = await Usuario.find();
    console.log(resultado);
})();



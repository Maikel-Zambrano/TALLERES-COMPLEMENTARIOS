const mongoose= require("mongoose");
const {Schema}= mongoose;

const NoticiasSchema = new Schema(
{
    titulo: { type:String },
    descripcion:{type:String},
    enlace: { type:String },  
},
{
    timestamps:{ createdAt: true, updatedAt:true } 
}
);

module.exports  =  mongoose.model("noticia", NoticiasSchema);

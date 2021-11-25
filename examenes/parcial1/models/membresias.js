const {Schema, model}= require('mongoose');

const MembresiaSchema = Schema({
    fechaInicio:{type:String},
    fechaFinal:{type:String},
    cliente:{type:String},
    estado:{type:String},
    costo:{type:String},
    tipo:{type:String},
    tipoError:{type:Boolean, default:true}
})

MembresiaSchema.methods.toJson=function(){
    const{...data}= this.toObject();
    return data;
}

module.exports=model('Membresia', MembresiaSchema);
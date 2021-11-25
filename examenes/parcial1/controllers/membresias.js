const {Membresia}= require('../models');
const {response}= require('express')

const obtenerMembresias = async (req, res= response)=>{
    const {limite= 10, desde=0}=req.query;
    const query ={TipoError:true}
    const [total, membresias]= await Promise.all(
        [
        Membresia.countDocuments(query),
        Membresia.find(query).skip(desde).limit(limite) 
        ]
        
    );
    res.json({
        total,membresias
    })
}

const obtenerMembresia = async(req, res= response)=>{
    const {id}= req.params
    const membresia= await Membresia.findById(id)
    res.json(membresia)
}

const crearMembresia = async (req, res=response)=>{
    const{...body}= req.body;
    const data={...body}
    

    const membresia= new Membresia(data);
    const membresiaNueva = await membresia.save()
    res.status(201).json(membresiaNueva);
}

const actualizarMembresia= async  (req, res = response)=>{
    const { id } =  req.params;
    const {...data } = req.body;
    const membresiaModificada = await  Membresia.findByIdAndUpdate(id, data, {new: true } );
    res.json(membresiaModificada);

}

const borrarMembresia=async (req, res= response)=>{
    const { id } =  req.params;
    const membresiaBorrada = await  Membresia.findByIdAndUpdate(id,{TipoError:false}, {new: true } );
    res.json(membresiaBorrada);
}

module.exports={
    obtenerMembresia,
    obtenerMembresias,
    crearMembresia,
    actualizarMembresia,
    borrarMembresia
};


//{ estado:false }
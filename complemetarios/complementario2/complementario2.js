/*ENFOQUE DEL PROYECTO: LEGALIZACION DE MATRICULA DE LOS ESTUDIANTES DE LA FACULTAD DE CIENCIAS INFORMÁTICAS*/

//APLICAR PROMESAS Y ASYNC/AWAIT PARA SOLUCIONAR UN PROBLEMA APLICADO A SU PROYECTO

//ARREGLOS
//PRIMER ARREGLO
const estudiantes=[
    {
        id:1,
        nombre:'Maikel Zambrano',
        modalidad: 'presencial',
        tipoEstudiante: 'regular',
        idcarrera:1

    },
    {
        id:2,
        nombre:'Steven Mejia',
        modalidad: 'semi-presencial',
        tipoEstudiante: 'regular',
        idcarrera:2
    }
]
//SEGUNDO ARREGLO
const carreras=[
    {
        id:1,
        nombre:'Ingenieria en sistemas',
        
    },
    {
        id:2,
        nombre:'Ingenieria en TI',
    }
]
//TERCER ARREGLO
const materias=[
    {
        id:1,
        nivel:'primer semestre',
        tipoMatricula:'primera matricula',
        nombre: 'fundamentos de programación'
    },
    {
        id:2,
        nivel:'primer semestre',
        tipoMatricula:'segunda matricula'
    }
]

function buscarEstudiantePorId(id)
{
    return new Promise((resolve, reject)=>{
        const estudiante= estudiantes.find((estudiante)=> estudiante.id===id );
        if (!estudiante)
        {
            const error=new Error();
            error.message="Estudiante no encontrado";
            reject(error);
        }
        resolve(estudiante);
    })
}
function buscarCarreraPorId(id)
{
    return new Promise((resolve,reject)=>{
        const carrera= carreras.find((carrera=> carrera.id===id));
        if (!carrera)
        {
            const error= new Error();
            error.message="No hemos encontrado la carrera";
            reject(error);
        }
        resolve(carrera);
    })
}

//console.log(carreras);
console.log("DATOS DEL ESTUDIANTE");
buscarEstudiantePorId(2)
.then((estudiante)=>{
    estudianteAuxiliar= estudiante;
    return buscarCarreraPorId(estudiante.idcarrera);
})
.then((carrera)=>{

    estudianteAuxiliar.carrera= carrera;
    delete estudianteAuxiliar.idcarrera;

    console.log(estudianteAuxiliar)
})
.catch((err)=>{
    console.log(err.message)
})
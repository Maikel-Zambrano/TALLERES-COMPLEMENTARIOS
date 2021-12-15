// crear una función que reciba N como parámetro y genere la tabla de multiplicar
//por consola utilzando recursividad.
function TablaMultiplicar(numero, limite) {

    if (limite>1)
    TablaMultiplicar(numero,limite-1);	
        console.log("la tabla de multiplicar es ");	
		console.log(numero + "x" + limite + "=" + numero*limite);
}

TablaMultiplicar(5,15);
//-----------------------------------------------------------------------
// crear un objeto mascota que tenga parámetros nombre, edad y color.
const mascota={
    nombre:'Lazi',
    edad:'2 años',
    color:'negro y café',
  
};
console.log(mascota);
//-----------------------------------------------------------------------
//Definir un arreglo con las comidas favoritas de la mascota 
console.log("     Comidas Favoritas: ")
const comidasfavoritas=[
    "croquetas",
    "vegetales",
    "sopas",
    "galletas"
]
//-----------------------------------------------------------------------
//Recorrer al arreglo definido en la opcion anterior y mostrarlo aplicando 
//un do while 
let recorrido=0;
do {
    console.log(comidasfavoritas[recorrido]);
    recorrido++;
} while (recorrido<comidasfavoritas.length);
//-----------------------------------------------------------------------
//Crear una función flecha que reciba un elemento del arreglo de comidas favoritas y lo devuelva en
//mayúscula.
console.log("     Comidas Favoritas en MAYUSCULAS: ")
comidasfavoritas.forEach(comida => {
    console.log(comida.toUpperCase());
});



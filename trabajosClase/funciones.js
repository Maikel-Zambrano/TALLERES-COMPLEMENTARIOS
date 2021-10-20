//funciones estándar solo lleva la palabra funcion y un nombre 

function saludar(nombre)
{
    return `Hola como estas ${nombre}`;
}

//funciones con variables; se la define con una variable al inicio
const saludar2 = function(nombre)
{
    return `Hola como estas ${nombre}`;
}

//funciones tipo flecha; se caracteriza por la fecha, lleva un parámetro
const saludar3 = (nombre)=>{
    return `Hola como estas ${nombre}`;
}

function mostrarSaludoPorConsola(fn, parametro)
{
    console.log(fn(parametro));
}
mostrarSaludoPorConsola(saludar2, "Juan");
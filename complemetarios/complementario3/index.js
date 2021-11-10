//APLICAR UN CRON JOB SOBRE UNA PAGINA WEB QUE USTED USE DE FORMA HABITUAL
//PARA QUE SE EJECUTE UNA VEZ AL DIA Y GUARDE INFORMACIÓN EN SU BASE DE DATOS 


//EXPORTAMOS LAS LIBRERIAS QUE VAMOS A NECESITAR 
const mongoose= require("mongoose")
const axios  = require("axios").default;
const cheerio = require("cheerio");
const cron = require("node-cron");

//IMPORTAMOS LAS LIBRERIAS CREADAS EN EL PROYECTO
const {MONGO_URI} = require('./config');
const {noticia} = require('./models');


//el cron job se ejecutarA todos los dias a las 13:33
cron.schedule("33 13 * * *", async () => {
    try 
    {
    //CREAMOS UNA VARIABLE QUE OBTENDRA EL METODO DE CONEXION MEDIANTE LA LIBRERÍA MONGOOSE
    const Conexion =  await mongoose.connect(MONGO_URI);
    // 1. conectarnos a la pAgina de benditoFutbol
    const html = await  axios.get("https://www.benditofutbol.com/")  ;
    //2. extraer el html de la pAgina
    const $ =  cheerio.load(html.data);
    
    const titulos =   $(".title.page-link");
    //crear un arreglo de las noticias para tener un mejor control de los datos que se extraen
   
    let arregloNoticias= []
    //3. recorrer los nodos de la pAgina
    titulos.each((index, element)=>{
    
        const Noticia=
        {
            titulo:  $(element).text().toString(),
            //el nodo no es hijo, por lo cual no utilizé la propiedad children()
            enlace: $(element).attr("href"),
           
        } 
        //le decimos al arreglo que va a tener lo mismo pero se le añade lo de la variable Noticia
        arregloNoticias = [ ...arregloNoticias, Noticia ];
        
    })
    //4. guardar en la base de datos
    await noticia.create(arregloNoticias);
     }
    catch(err){
        console.log(err)
    }
}
);

window.addEventListener('load', function(){
    let htmlGenerado=``;
    htmlGenerado+=`<label for="txtid" class "datos">ID:</label>`
    htmlGenerado+=`<input type="text" id="txtid">`
    htmlGenerado+=`<label for="txtnombre">nombre:</label>`
    htmlGenerado+=`<input type="text" id="txtnombre">`
    htmlGenerado+=`<label for="txtcosto">costo:</label>`
    htmlGenerado+=`<input type="text" id="txtcosto">`
    htmlGenerado+=`<label for="txtprecio">precio:</label>`
    htmlGenerado+=`<input type="text" id="txtprecio">`
    htmlGenerado+=`<label for="txtminimo">minimo:</label>`
    htmlGenerado+=`<input type="text" id="txtminimo">`

    htmlGenerado+=`<label for="categoria">categoria:</label>`
    htmlGenerado+=`<input type="text" id="txtcategoria">`
    //htmlGenerado+=`<select><option value="value1">Value 1</option></select>`
    htmlGenerado+=`<button id="btnnuevo">nuevo</button>`
    htmlGenerado+=`<button id="btngrabar" >grabar</button>`
    htmlGenerado+=`<button id="btnmodificar">modificar</button>`
    htmlGenerado+=`<button id="btnconsultar">consultar</button>`
    htmlGenerado+=`<button id="btncategorias">categorias</button>`
    //////////////////
    /////////////////
    htmlGenerado+=`<button id="btneliminar" >eliminar</button>`
    htmlGenerado+=`<div id="divcontenido"></div>`

    htmlGenerado+=`<div id="divcontenido2"></div>`

    htmlCuerpo.innerHTML = htmlGenerado;

    btnnuevo.addEventListener('click',function(){
        txtid.value=``;
        txtnombre.value=``;
        txtcosto.value=``;
        txtprecio.value=``;
        txtminimo.value=``;
        txtcategoria.value=``;
    })
    btngrabar.addEventListener('click', function(){
        let url=`http://localhost:5000/v1/pruebas/api/productos`;
        let data = {
            nombre: txtnombre.value ,
            costo: txtcosto.value ,
            precio: txtprecio.value,
            minimo: txtminimo.value,
            categoria: txtcategoria.value
        }
        fetch(url,{
            method:'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type':"application/json"
            }
        })
        .then(
            res => res.json()
        )
        .then(res2 => console.log(res2))
        .catch(error=> console.log(error) )
    })
    btnmodificar.addEventListener('click', function(){
        let url=`http://localhost:5000/v1/pruebas/api/productos/${txtid.value}`;
        let data = {
            nombre: txtnombre.value ,
            costo: txtcosto.value ,
            precio: txtprecio.value,
            minimo: txtminimo.value,
            categoria: txtcategoria.value
        }
        fetch(url,{
            method:'PUT',
            body: JSON.stringify(data),
            headers:{
                'Content-Type':"application/json"
            }
        })
        .then(
            res => res.json()
        )
        .then(res2 => console.log(res2))
        .catch(error=> console.log(error) )
    })
    btnconsultar.addEventListener('click', function(){
        let url=`http://localhost:5000/v1/pruebas/api/productos`;
        fetch(url).then(resultado=>{
            return resultado.json()
        })
        .then(consulta=>{
            let tabla =`<table border=1>`
            for (const elemento  in consulta.productos)
            {
                const actual = consulta.productos[elemento];
                tabla+=`<tr>`;
                tabla+=`<td> <button class='actualizar' value='${actual._id}' > ${ actual.nombre  } </button> </td>`
                tabla+=`<td>${ actual.costo  }</td>`
                tabla+=`<td>${ actual.precio  }</td>`
                //tabla+=`<td>${ actualcat.nombre}</td>`
                tabla+=`</tr>`;
                console.log(actual);
            }
            
            tabla+=`</table>`
            divcontenido.innerHTML= tabla;
            document.querySelectorAll('.actualizar').forEach(e=>{
                e.addEventListener('click', ()=>{
                    let url2=`http://localhost:5000/v1/pruebas/api/productos/${e.value}`;
                    fetch(url2).then(respuesta=>{
                        return respuesta.json()
                    })
                    .then(convertido=>{
                        txtid.value = convertido._id;
                        txtnombre.value = convertido.nombre;
                        txtcosto.value = convertido.costo;
                        txtprecio.value= convertido.precio;
                        txtminimo.value= convertido.minimo;
                    })
                })
            })

        })
    })
    
//categorias

btncategorias.addEventListener('click', function(){
    let url=`http://localhost:5000/v1/pruebas/api/categorias`;
    fetch(url).then(resultado=>{
        return resultado.json()
    })
    .then(consulta=>{
        let tabla =`<table border=1>`
        for (const elemento  in consulta.categorias)
        {
            let actual = consulta.categorias[elemento];
            tabla+=`<tr>`;
            tabla+=`<td> <button class='categorias' value='${actual._id}' > ${ actual.nombre  } </button> </td>`
            tabla+=`<td>${ actual._id  }</td>`
            tabla+=`</tr>`;
            console.log(actual);
        }
        tabla+=`</table>`
        divcontenido2.innerHTML= tabla;
        document.querySelectorAll('.categorias').forEach(e=>{
            e.addEventListener('click', ()=>{
                let url2=`http://localhost:5000/v1/pruebas/api/categorias/${e.value}`;
                fetch(url2).then(respuesta=>{
                    return respuesta.json()
                })
                .then(convertido=>{
                    txtcategoria.value= convertido._id
                })
            })
        })

    })
})


    btneliminar.addEventListener('click', function(){
        let url=`http://localhost:5000/v1/pruebas/api/productos/${txtid.value}`;
        fetch(url,{
            method:'DELETE',
        })
        .then(
            res => res.json()
        )
        .then(res2 => console.log(res2))
        .catch(error=> console.log(error) )
    })
})
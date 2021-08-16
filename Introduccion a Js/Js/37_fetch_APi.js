//Fetch Api es el remplazo a Ajax  
/* 
-Te permite enviar informacion al servidor u obetner informacion de un servidor y actualizar en tiempo real 
-puedes obtener un archivo local o una respuesta de un servidor(Texto o JSON)
-Utiliza Promis 

JSON= JAVASCRIPT OBJECT NOTATION es un lenguaje de transporte de datos puede ser creado en cualquier lenguaje y se puede consumir  por medio de fetch Api */

function obtenerEmpleados()
{
    const archivos='empleados.json';
    // toma como valor una url
fetch(archivos)
.then(resultado =>
    {
        console.log(resultado);
    }) 
}

obtenerEmpleados();
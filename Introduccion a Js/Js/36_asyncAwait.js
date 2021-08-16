// Async / Await


function descargarNuevosClientes()
{
    // forazremos a que se cumpla
    return new Promise (resolve => 
        {
            console.log("descargando clientes..espere...");
            setTimeout(function()
            {
            resolve('los cleintes fueron descargados');
            },5000);
        });
}

// setTimeout solo se resuelve una vez cada determinado tiempo


 //con set interva se estara ejecutando cada cierto tiempo  y de momento no se como pararlo pero esperemos que si sirva
// setInterval(function()
// {
// console.log("se sigue resolviendo");
// },3000);


async function app()
{
    try{
        const resultado= descargarNuevosClientes();
        console.log(resultado);
    }
    catch(error)
    {
        console.log(error);
    }
}

app();
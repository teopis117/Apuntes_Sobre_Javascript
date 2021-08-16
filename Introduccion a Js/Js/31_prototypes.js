//Prototipos nos sirven para poder crear funciones que solo seran utilizadas o estaran disponibles para determinados objetos

const cliente=
{
    nombre:"pepe",
    apellido:"diaz",
}

function Cliente(nombre,apellido)
{
    this.nombre=nombre;
    this.apellido=apellido;
}

Cliente.prototype.formatearcliente=function()
{
    return `el cleinte es ${this.apellido}`;
}


function formatearcliente()
{
    console.log("el cleinte es");
}
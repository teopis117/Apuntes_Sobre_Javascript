//ahora veremos algo llamado las estructuras de control en js por lo general cuando queremos comprobar las
/*
if(condicion)
{
    sentencias
}
por si no se cumpliera el if podemos utilizar el else if
else if(condicion)
{
    sentencias
}
y por si nunca de las anteriores se cumpla por asi decirlo los casos default  encontrariamos perfecto el else

else
{
    sentencias
}
*/
const rol="VISITANTE";

if(rol==="ADMINISTRADOR")
{
    console.log("eres un admin");
}

else if (rol==="usuario")
{
    console.log("eres un usuario");
}
else
{
    console.log("eres un visitante");
}
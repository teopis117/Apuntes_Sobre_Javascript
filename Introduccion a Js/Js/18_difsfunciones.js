/*en este caso veremos  la diferencia entra declaracion y exprecion de funciones donde con este tipo de sintaxis una se ejecutara y otra no 
la que se ejecutara sera la declaracion mientras que la expresion no puesto que  el interprete de js


Javascript se ejecuta en 2 etapas 1.-registro y 
2.-ejecucion

*/


//declaracion de funcion
sumar();
function sumar()
{
console.log(10+10);
}


//expresion de la funcion
const sumar2=function()
{
    console.log(3+3);
}

sumar2();
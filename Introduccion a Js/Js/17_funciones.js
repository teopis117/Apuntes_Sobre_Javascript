//funciones  las funciones son formas de hacer que nuestro codigo  mas organizado y preparado para reutilizarlo

/* ¿que son las funciones? nos permiten agrupar lineas de codigo en tareas con un nombre para realizar todo lo que agrupe en dicha tarea */

// Declaracion de una funcion                  function nombre(parametros){}

function sumar()
{
console.log(10+10);
}

//expresion de una funcion

const sumar2=function()
{
    console.log(3+3);
}

sumar2();

//iife =son funciones qu se mandan a llamar ellas mismas ademas que protegen que el contenido dentro de estas funciones no pueda ser utilizado por otros archivos

(function()
{
    console.log("esto es una funcion IIFE");
})();
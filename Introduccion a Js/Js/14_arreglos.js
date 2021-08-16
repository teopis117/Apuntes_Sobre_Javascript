// Arreglos  son una forma de almacenar muchos datos dentro de una variables

// forma de incializar un arreglo            
// tipo identificador=[valores,valores,valores];
const numeros=[10,20,30,40,50];
console.log(numeros);

// tambien podemos mostrar de una manera mas ordenada los valores del arreglo con un metodo llamado table

console.table(numeros);

// podemos guardar diferentes tipos de datos en un arreglo un ejemplo este este

const arreglo=["hola",12,true,"si",null,{nombre:"juan",edad:12},[1,2,3]];

console.table(arreglo);


// podemos acceder a los valores de un arreglo por medio de un iterador

console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);

// foreach es una funcion especial de js

// el array.forEach(element => {
    
// });

// podemos conocer el tamaño de un arreglo con el metodo length

numeros.length();

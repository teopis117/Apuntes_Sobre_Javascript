const curso="Aprendiendo Javascript para poder ser el mejor desarrollador";
const prodcuto2='monitor de 30 pulgadas';

// con length veremos el tamaño de caracteres de nuestra cadena
console.log(curso.length);

// para saber en que posicion hay alguna palabra que busquemos

console.log(curso.indexOf('Javascript'));
// INDEXOF
// con el metodo indexOf cuando el resultado es -1 nos estara diciendo que la palabra que intentamos buscar no fue encontrada mientras que si es mayor a -1 si la encontro
console.log(curso.indexOf('asJavascripsdt'));

// INCLUDES nos devuelve un true o false 
console.log(curso.includes('Javascript'));


const correo="correo@hotmail.com";
console.log(correo.includes('@'));
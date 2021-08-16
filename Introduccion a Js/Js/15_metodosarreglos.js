
const numeros=[10,20,30,40,50];
console.log(numeros);


console.table(numeros);

// hay una gran variedad de metodos que nos ayudaran en nuestro camino en js en cuanto a metodos y veremos algunos de los mas usados

// con push() agregaremos un un elemento al final del arreglo
numeros.push(60,70,80);

// con unshift() agregaremos un elemento pero al inicio del arreglo
numeros.unshift(-1,2,3);


const meses=["enero","febrero","marzo","abril"];

// con pop() eliminaremos el ultimo elemento del arreglo
meses.pop();

// con shift() eliminaremos el primer elemento del arreglo

meses.shift();

// con splice() eliminaremos cierta cantidad de elementos y le pasaremos dos valores el indice desde donde comenzara a eliminar y el tamaño de posiciones a eliminar splice(indice,elementos a eliminar)

meses.splice(2,1);

// la nueva manera para agregar elementos es con algo llamado  Rest operator o Spread operetor que nos servira de igual manera de agregar elementos de una mejor manera , con la ventaja que podemos escoger donde colocarlos

const nuevo=["diciembre",...meses];


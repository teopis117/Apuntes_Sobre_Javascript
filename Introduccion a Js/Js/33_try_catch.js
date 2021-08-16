//si tenemos algun error ya nada va a funcionar

const numero1=10;
// const numero2=20;
const numero3=30;

console.log(numero1);

// que hace?  en caso de que haya un error que me diga que tipo de errores hay  y solo se utiliza en muy pocos casos solo hay que utilizarlo en casos criticos de la aplicacion

try
{
    console.log(numero2);
}
catch(error)
{
    console.log(error);
}

console.log(numero3);
/*los parametros son  variables que existiran dentro de dicha funcion  y argumentos de la funcion son los valores que le pasemos a la funcion para ejecutarse */


// en esta funcion le pasamos como parametros variables llamados numeros
function sumar(numero1,numero2)
{
    console.log(numero1+numero2);
}


// y en estos dos casos le proporcionaremos  dos argumentos para que la funcion pueda ejecutarse y ojo! conforme pasemos los argumentos sera a la variable que definimos en nuestra declaracion de la funcion

sumar(1+2);
sumar(40+21);

//otro ejemplo

// Declaración

// en este caso no es necesario que el primer parametro que le proporcionemos sea la primera variable a utilzar ya que podemos hacer uso de ellas en cualquier momento de la funcion 

function tablaMultiplicar(tabla, hasta) {
    for (i = 0; i <= hasta; i++) console.log(tabla, "x", i, "=", tabla * i);
  }
  
  // Ejecución
  tablaMultiplicar(1, 10); // Tabla del 1
  tablaMultiplicar(5, 10); // Tabla del 5


/* PARAMETROS POR DEFECTO                              en algunos casos por X razon en las cuales no podamos proporcionar los valores con los cuales trabajemos en la funcion deberemos de pasarlos por defecto ya que sin ellos nuestro programa tendra un error de tipo NAN=not a number y podemos hacerlo de la siguiente manera */


function sumar(numero1=0,numero2=0)
{
    console.log(numero1+numero2);
}
//con esto le asignara el valor de 1 a numero1 mientras que como no pasamos el valor a numero2 tomara el 0 que ya tenia preestablecido
sumar(1);


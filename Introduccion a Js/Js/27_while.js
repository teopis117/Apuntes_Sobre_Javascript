//while tambien es una estructura de control en js y es muy similar al for pero la sintaxis es diferente y mientras la condicion sea correcta se seguira ejecutando

let i=0;//indice

while(i<10)//condicion
{

    if(i % 2 === 0) 
    {
        console.log(`${i} es par`);
    }
    i++;//incremento
}

// Do while la principal diferencia entre while y dowhile es que sin importar el resultado de la comparacion almenos una vez se va a ejecutar el codigo del do while

let x=100;
do{
console.log(x);
x++;
}while(x <10)



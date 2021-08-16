// cuando tenemos muchas opciones para poder evaluar se ve un poco ambiguo o mal muchos if else anidados asi qeu una opcion seria la de switch

const metodo="cheque1";

switch(metodo)
{
    case "tarjeta":
        {
            console.log("esto es una tarjeta");
            break;

        }
    case "cheque":
        console.log(`eso es  un cheque`);
        break;
    
    default:
        {
            console.log("aun no has pagado");
        }
}
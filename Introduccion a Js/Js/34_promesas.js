//refleja un valor que puede estar disponible en algun momento de la aplicacion

 const usuarioAuntenticado = new Promise((resvolve,reject) => 
    {
        // cuando se ejecuta una promesa se pasan dos valores automaticanmente la primera se conoce como RESOLVE y REJECT 
        
        // RESOLVE = se ejecutara cuando la promesa se cumpla
        const auth=true;

        if(auth)
        {
            resvolve("usuario autenticado"); //el promise se cumple
        }   
        else
        {
            reject("no se pudo iniciar sesion");  //no se cumple el promise
        }

    });

    console.log(usuarioAuntenticado);


    //en los promises se pueden encontrar 3 valores posibles
    /*
    Pending: no se ha cumplido pero tampoco se ha rechazado
    FullFilled:ya se cumplio
    Reject:se rechazo o no se pudo cumplir
    
    
    
    */
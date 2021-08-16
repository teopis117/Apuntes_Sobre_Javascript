//meotods propiedad , a lo largo hemos podido utilizar diferentes metodos con los cuales podiamos hacer un sin fin de cosa pero es momento de que nosotros hagamos los nuestros

//crear un reproductor de musica

//inicializamos el objeto
const reproductor= {

    // agregaremos los 4 tipos de funciones reproducir,pausar,borrar y crear playlist

    reproucir: function(id)
    {
        // utilizamos las `` para hacer uso de las templates strings
        console.log(`Reproduciendo Cancion con el ID:${id}`);
    },

    pausar: function()
    {console.log(`pausando la cancion`);
    },

    reproducirplaylist:function(nombre)
    {
        console.log(`Reproduciendo la playlist${nombre}`);
    }

}

// recordemos que tambien de esta manera podemos agregar propiedades a nuestros objetos

reproductor.borrarcancion=function(id)
{
    console.log(`eliminando la cancion con el id:${id}`);
}


reproductor.reproucir(23);
reproductor.pausar();
reproductor.borrarcancion(444);
reproductor.reproducirplaylist("juanes");

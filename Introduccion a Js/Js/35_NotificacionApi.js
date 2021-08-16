// document.querySelector es la forma en como escogemos codigo html en js
// con esto seleccionamos al elemento de html que tenga al id de boton

const boton=document.querySelector('#boton');

// todos los eventos en js inician con addeventlistener que es un evento que nos ayudara 

// le pasamos dos valores = 1.- lo que el usuario hara 2.-lo que sucedera
boton.addEventListener('click',() =>
{
    Notification.requestPermission()
    .then(resultado => console.log(`el resultado es ${resultado}`))
})


if(Notification.permission == 'granted')
{
    // toma dos valores el nombre de la notificacion y un objeto con varios opciones
    new Notification('esto es una notificacion',{
        icon: 'img/ccj.png',
        body:'codigo con pepe'
    })
}
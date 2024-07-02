let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteo = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);
    console.log(numeroSecreto);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número es menor');
        } else {
            asignarTextoElemento('p','El número es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario'). value = '' ;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteo);
    //Si ya sorteamos todos los números
    if(listaNumerosSorteo.length == numeroMaximo) {
        asignarTextoElemento ('p','Ya se sortearon todos los números posibles');

    } else {

        //Si el número generado está incluido en la lista
        if (listaNumerosSorteo.includes(numeroGenerado)) {
            return generarNumeroSecreto();

        } else {
            listaNumerosSorteo.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de número
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();
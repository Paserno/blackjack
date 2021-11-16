/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0,
    puntosCompu = 0;

// Referencias HTMl
const bPedir = document.querySelector('#btnPedir');
const bDetener = document.querySelector('#btnDetener');
const puntajeSmall = document.querySelectorAll('small')//.innerText = 'Hola';
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasCPU = document.querySelector('#cpu-cartas');


// Esta Funcion Crea una Nueva Baraja
const crearDeck = () => {

    for (let i = 2; i <= 10; i++) {
        for (const tipo of tipos) {
            deck.push(i + tipo);
        }
    }
    for (const tipo of tipos) {
        for (const esp of especiales) {
            deck.push(esp + tipo)
        }
    }


    // console.log(deck);
    deck = _.shuffle(deck);//aleatoridad
    console.log(deck);
    return deck;

}

crearDeck();

// Esta Funcion me permite tomar una carta
const pedirCarta = () => {

    if (deck.length === 0) {
        throw 'No Hay cartas en el deck';
    }
    const carta = deck.pop();
    //console.log(deck);
    //console.log(carta); // carta debe de ser de la baraja
    return carta;
}
// deck = [];


//
const valorCarta = (carta) => {
    // substring(); extrae caracteres de una cadena de caracter
    const valor = carta.substring(0, carta.length - 1);
    // Funcion isNan() evalua si hay un numero (devuelve tru or false)
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
}

// Turno de la Compu
const turnoCompu = (puntosMinimos) => {

    do {
        const carta = pedirCarta();

        puntosCompu = puntosCompu + valorCarta(carta);
        puntajeSmall[1].innerText = puntosCompu;

        const imgCarta = document.createElement('img');
        imgCarta.src = `./assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasCPU.append(imgCarta);
        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosCompu < puntosMinimos) && (puntosMinimos <= 21));


}




// Eventos Pedir
bPedir.addEventListener('click', () => {

    const carta = pedirCarta();

    puntosJugador = puntosJugador + valorCarta(carta);
    puntajeSmall[0].innerText = puntosJugador;
    // <img class="carta" src="./assets/cartas/JC.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `./assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta'); // Agrega clase 
    divCartasJugador.append(imgCarta); // Añadir

    if (puntosJugador > 21) {
        console.warn('Lo siento mucho, perdiste');
        bDetener.disabled = true;
        bPedir.disabled = true;
        turnoCompu(puntosJugador);
    } else if (puntosJugador === 21) {
        console.warn('21, Ganaste!');
        bPedir.disabled = true;
        bDetener.disabled = true;
        turnoCompu(puntosJugador);

    }

});


// Evento Dentener
bDetener.addEventListener('click', () => {
    bPedir.disabled = true;
    bDetener.disabled = true;
    turnoCompu(puntosJugador);

});
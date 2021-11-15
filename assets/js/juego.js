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
const puntajeSmall = document.querySelectorAll('small')//.innerText = 'Hola';


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
// se puede manejar como un string
const valor = valorCarta(pedirCarta());
// console.log({valor});


// Eventos
bPedir.addEventListener('click', ()=>{

    const carta = pedirCarta();

    puntosJugador = puntosJugador + valorCarta(carta);
    puntajeSmall[0].innerText = puntosJugador;

    
});

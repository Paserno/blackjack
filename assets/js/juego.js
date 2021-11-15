/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

// Esta Funcion Crea una Nueva Baraja
const crearDeck = () => {

    for (let i = 2; i <= 10; i++) {
        for (const tipo of tipos) {
            deck.push(i + tipo);
        }
    }
    for (const tipo of tipos) {
        for (const esp of especiales) {
            deck.push(tipo + esp)
        }
    }


    // console.log(deck);
    deck = _.shuffle(deck);
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
    console.log(deck);
    console.log(carta); // carta debe de ser de la baraja
    return carta;
}
// deck = [];

// pedirCarta();    


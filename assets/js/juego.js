
// Patron Modulo (se esta ejecutando) 
const miModulo = (() => {
    'use strict'

    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

    let puntosJugadores = [];

    // Referencias HTMl
    const bPedir = document.querySelector('#btnPedir'),
        bDetener = document.querySelector('#btnDetener'),
        bNuevo = document.querySelector('#btnNuevo');

    const puntajeSmall = document.querySelectorAll('small'),//.innerText = 'Hola';
        divCartasJugadores = document.querySelectorAll('.divCartas');

    // F. inicializa el juego
    const inicializarJuego = (numeroJugadores = 2) => {
        deck = crearDeck();
        puntosJugadores = [];
        for (let i = 0; i < numeroJugadores; i++) {
            puntosJugadores.push(0); // 0 puntos para cada jugador en el arreglo
        }
        bPedir.disabled = false;
        bDetener.disabled = false;
        puntajeSmall.forEach(elem => elem.innerText = 0);
        divCartasJugadores.forEach(elem => elem.innerHTML = '');

    }


    // Esta Funcion Crea una Nueva Baraja
    const crearDeck = () => {

        deck = [];
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
        return _.shuffle(deck);//aleatoridad
    }

    // Esta Funcion me permite tomar una carta
    const pedirCarta = () => {

        if (deck.length === 0) {
            throw 'No Hay cartas en el deck';
        }
        return deck.pop();
    }


    // Esta F. sirve para tomar el valor de la carta
    const valorCarta = (carta) => {
        // substring(); extrae caracteres de una cadena de caracter
        const valor = carta.substring(0, carta.length - 1);
        // Funcion isNan() evalua si hay un numero (devuelve tru or false)
        return (isNaN(valor)) ?
            (valor === 'A') ? 11 : 10
            : valor * 1;
    }

    // Turno: 0 = Primer jugador y el ultimo la compu
    const acumularPuntos = (carta, turno) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntajeSmall[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }

    const crearCarta = (carta, turno) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `./assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta);
    }

    const determinarGanador = () => {

        const [puntosMinimos, puntosCompu] = puntosJugadores;
        // Callback
        setTimeout(() => {
            if (puntosCompu === puntosMinimos) {
                alert('Nadie Gana 😔');
            } else if (puntosMinimos > 21) {
                alert('Copu Gana 💻');
            } else if (puntosCompu > 21) {
                alert('Jugador Gana! 😎')
            } else {
                alert('Copu Gana 💻');
            }
        }, 20);
    }


    // Turno de la Computador
    const turnoCompu = (puntosMinimos) => {

        let puntosCompu = 0;
        do {
            const carta = pedirCarta();
            puntosCompu = acumularPuntos(carta, puntosJugadores.length - 1);
            crearCarta(carta, puntosJugadores.length - 1);

        } while ((puntosCompu < puntosMinimos) && (puntosMinimos <= 21));
        determinarGanador();
    }




    // Eventos Pedir
    bPedir.addEventListener('click', () => {

        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0);
        crearCarta(carta, 0);


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
        turnoCompu(puntosJugadores[0]);

    });


    // Evento Nuevo

    bNuevo.addEventListener('click', () => {
        console.clear();
        inicializarJuego();
    });


    return {
        nuevoJuego: inicializarJuego
    };
})();






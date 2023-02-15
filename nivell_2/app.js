//Construeix una aplicació que creï diversos Jugadors/es.
//Els jugadors/es podran ser afegits a un Joc, que mostrarà un marcador amb les puntuacions
//i el guanyador/a. L'aplicació ha de poder afegir o treure punts a cada jugador/a perquè el
//marcador canviï. La classe Marcador ha d'implementar un patró Singleton com a requisit
//indispensable.
const Jugador = require("./Jugador");

class Jugadors {
    constructor() {
        this.jugadors = [];
    }

    newJugador(name) {
        let j = new Jugador(name);
        this.jugadors.puch(j);
        return j;
    }
    get allJugadors() {
        return this.players;
    }
    get numJugadors() {
        return this.players.length;
    }
}

let joc = new Jugadors();
joc.newJugador("Pablo");
joc.newJugador("Rosalia");
joc.newJugador("Kevin");

// tots els jugadors
console.log(joc.numJugadors + " Players");
console.log(joc.allJugadors);

// els jugadors jugant
joc.numJugadors.forEach((jugador) => jugador.play());

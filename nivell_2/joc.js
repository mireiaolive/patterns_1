const Marcador = require("./Marcador");

class Joc {
    Marcador = new Marcador();
    constructor(name) {
        this.name = name;
    }
    Marcador.addGame();

    addGame() {

    }
    addJugador(name) {}
    addPunts() {}
    restPunts() {}
}

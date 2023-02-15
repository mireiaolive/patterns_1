//Singleton
//globalmente acesible
//solo existe una instancia de la class
//para evita acceso a algun recurso compartido: database, documento
//hacer privado el constructor predeterminado
//crear un método de creación estático que actúe como constructor.

class Marcador {
    resultat = [];
    static instance;
    constructor() {
        if (Marcador.instance) {
            return Marcador.instance;
        }
        Marcador.instance = this;
    }
}

module.exports = Marcador;

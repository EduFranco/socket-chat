class Usuarios {

    constructor() {
        this.personas = [];
    }

    agregarPersona(id, nombre, sala) {
        let persona = { id, nombre, sala };

        this.personas.push(persona);

        return this.personas;
    }

    getPersona(id) {
        //let personas = this.personas.filter(persona => persona.id = id)[0]; //Lo mismo que abajo
        let persona = this.personas.filter(persona => {
            return persona.id === id;
        })[0];

        return persona;
    }

    getPersonas() {
        return this.personas;
    }

    getPersonasPorSala(sala) {
        let personasEnSala = this.personas.filter(persona => persona.sala === sala);
        return personasEnSala;
    }

    borrarPersona(id) {
        let personaBorrada = this.getPersona(id);

        /* this.personas = this.personas.filter(persona => {
            return persona.id != id;
        }); */
        this.personas = this.personas.filter(persona => persona.id != id); //Simplificada

        return personaBorrada;
    }
}

module.exports = {
    Usuarios
};
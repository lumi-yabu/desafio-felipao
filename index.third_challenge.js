class HeroModel {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type; // Recebe a string sorteada passada na instância

        // Atribui o mapa de armas à instância usando 'this'
        this.weapons = {
            "guerreiro": "espada",
            "mago": "magia",
            "monge": "marciais",
            "ninja": "shuriken"
        };
    }

    identifyWeapon(type) {
        // Busca direta pela chave no objeto de armas
        return this.weapons[type] || "mãos vazias";
    }

    attack() {
        return `O ${this.type} atacou usando ${this.identifyWeapon(this.type)}!`;
    }
}

// Array de opções mantido fora da classe para ser sorteado antes de criar o herói
const availableTypes = ["guerreiro", "mago", "monge", "ninja"];
const getType = availableTypes[Math.floor(Math.random() * availableTypes.length)];

const idadeMinima = 18;
const idadeMaxima = 99;
const idadeAleatoria = Math.floor(Math.random() * (idadeMaxima - idadeMinima + 1)) + idadeMinima;

// Criando o herói com dados válidos
let hero = new HeroModel("Superman", idadeAleatoria, getType);

console.log(hero.attack());

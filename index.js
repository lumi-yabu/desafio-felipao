let heroi = "Homem-Aranha"
let xp = 9999
let nivel

const faixas = [
    { limite: 1000, nome: "Ferro" },
    { limite: 2000, nome: "Bronze" },
    { limite: 5000, nome: "Prata" },
    { limite: 7000, nome: "Ouro" },
    { limite: 8000, nome: "Platina" },
    { limite: 9000, nome: "Ascendente" },
    { limite: 10000, nome: "Imortal" }
]

let i = 0
while (i < faixas.length) {
    if (xp <= faixas[i].limite) {
        nivel = faixas[i].nome
        break
    }
    i++
}

if (nivel === undefined) {
    nivel = "Radiante"
}

console.log("O Herói de nome " + heroi + " está no nível " + nivel)
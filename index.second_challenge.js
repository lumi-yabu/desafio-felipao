let winsQuantity = 9999
let lossesQuantity = 9899

function getRankingScore(winsQuantity, lossesQuantity) {
    let score = winsQuantity - lossesQuantity
    return score
}

let rankingScore = getRankingScore(winsQuantity, lossesQuantity)

function getNivel(rankingScore) {
    if (rankingScore <= 10) {
        return "Ferro"
    } else if (rankingScore <= 20) {
        return "Bronze"
    } else if (rankingScore <= 50) {
        return "Prata"
    } else if (rankingScore <= 80) {
        return "Ouro"
    } else if (rankingScore <= 90) {
        return "Diamante"
    } else if (rankingScore <= 100) {
        return "Lendário"
    } else {
        return "Imortal"
    }
}

let nivel = getNivel(rankingScore)

console.log(`O Herói tem saldo de ${rankingScore} e está no nível ${nivel}`)
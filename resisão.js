const jogoString = '10 20 20 8 25 3 0 30 1'
const arrayJogos = jogoString.split(' ')

function comparandoJogos(arrayJogos) {
    let maiorDesempenho = parseInt(arrayJogos[0])
    let piorJogo = 0
    let recorde = 0
    let piorDesempenho = parseInt(arrayJogos[0])

    for (let i = 1; i < arrayJogos.length; i++) {
        const nArrayI = parseInt(arrayJogos[i]);

        if (nArrayI > maiorDesempenho) {
            maiorDesempenho = nArrayI 
            recorde++       
        }
        if (nArrayI < piorDesempenho) {
            piorDesempenho = nArrayI 
            piorJogo = i
        }    
    }
    return [recorde, piorJogo + 1]
}

console.log(comparandoJogos(arrayJogos)) // cuidado para sempre passar o argumento da função, pois se fazer a chamada sem nenhum valor vai assumir que não existe nada 



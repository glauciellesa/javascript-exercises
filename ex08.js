/* 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.) */

const n = "10 20 20 8 25 3 0 30 1"
const nArray = n.split(" ")
console.log(nArray)

function compararJogo(nArray) {
    console.log(nArray)
    let melhorJogo = parseInt(nArray[0])
    let recorde = 0
    let piorJogo = parseInt(nArray[0])
    let posicaoPiorJogo = 0

    for (let i = 1; i < nArray.length; i++) {
        const current = parseInt(nArray[i])

/*         console.log({ melhorJogo, recorde, current: current, muda: (current > melhorJogo)})
 */
        if (current > melhorJogo) {
            melhorJogo = current
            recorde++
        }  
        if (current < piorJogo){
            piorJogo = current
            posicaoPiorJogo = i
        }
    }
    return [recorde, posicaoPiorJogo + 1]
}



console.log(compararJogo("10 20 20 8 25 3 0 30 1".split(" ")))
console.log(compararJogo("1 2 3 4 5".split(" ")))
console.log(compararJogo("5 4 3 2 1".split(" ")))
console.log(compararJogo("10".split(" ")))
console.log(compararJogo("".split(" ")))
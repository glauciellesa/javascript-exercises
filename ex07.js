/* 07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.*/

function valorX (ax2, bx, c, nevative = false) {
    const raizQuadrada = Math.sqrt(delta) / (2 * ax2)
    if (positivo) {
        const x1 = (bx * -1) + raizQuadrada
        return x1
    }
    const x2 = (bx * -1) - raizQuadrada
    return x2
} 


let bhaskara = function (ax2, bx, c) {
    let delta = (bx ** 2) - 4 * (ax2 * c)

    if (delta < 0) {
        return "Delta é negativo"
    } 
     
    let positivo = (-(bx) + Math.sqrt(delta))/ (2 * ax2)
    let negativo = (-(bx) - Math.sqrt(delta)) / (2 * ax2)
    return [positivo, negativo]
}

console.log(bhaskara(3, -5, 12))
console.log(bhaskara(4, 2, -6))
console.log(bhaskara(2, -6, 0))


/* console.log({
    delta: delta,
    "-bx": -bx,
    up: -(bx) + delta,
    down: 2 * ax2,
    pos: positivo
}) */
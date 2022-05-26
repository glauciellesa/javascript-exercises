/* 37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.*/

function progressaoAritmetica(n, a1, r) {
    let an = a1 + (n-1) * r
    let sn = ((a1 + an) * n) / 2
    return (`O termo Geral da PA = ${an} e a Soma dos Termos da PA é: ${sn}`)
}


function progressaoGeometrica(n, a1, r) {
    let an1 = a1 * (r ** (n-1))
    let sn1 = (a1 * ((r ** n) - 1)) / (r - 1)
    return (`O termo Geral da PG = ${an1} e a Soma dos Termos da PG é: ${sn1}`)
}

console.log(progressaoAritmetica(20, 2, 3))
console.log(progressaoGeometrica(20, 2, 3))
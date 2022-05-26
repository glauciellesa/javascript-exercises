//32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.


function mediaVetor (vetor) {
    let soma = 0
    for(let i = 0; i < vetor.length; i++) {
        soma += vetor[i]
    }

    return soma/vetor.length
}

let vetor = [1, 2, 3, 4, 5]

console.log(mediaVetor(vetor))




/* let vetor = [2, 3, 3, 5, 7, 10]

function mediaAritmetica(vetor) {
    let soma = 0
    let quantidade = 0 // Não é necessário uma váriável pode-se usar o vetor.length 
    let media = 0
    for(let i = 0; i < vetor.length; i++) {
        soma += vetor[i]
        quantidade++
        media = soma/quantidade
       
    }
    return media
}
console.log(mediaAritmetica(vetor)) */
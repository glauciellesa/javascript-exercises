//30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
//o maior 
//o menor valor dentro do vetor.

let vetor = [ 7, 8, 3, 10, 11, 12, 2, 17, 4, 5, 20, 21]
function definirMaiorMenor(vetor) {
    let maior = Number.MIN_SAFE_INTEGER 
    let menor = Number.MAX_SAFE_INTEGER
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] > maior) {
            maior = vetor[i] 
        }else if (vetor[i] < menor) {
            menor = vetor[i] 
        }
    }
    return [maior, menor]
}

console.log(definirMaiorMenor(vetor))
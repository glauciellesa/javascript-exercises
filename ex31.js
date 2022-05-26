/*31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.*/

let vetor = [0, -1, 3, 2, 3, -5, -7, -8, 10, -13, 14, 16];

function qntNumeroNegativo(vetor) {
    let qntNegativos = 0 
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] < 0) {
            qntNegativos++
        }
    }
    return qntNegativos
}

console.log(qntNumeroNegativo(vetor))
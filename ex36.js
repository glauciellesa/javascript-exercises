/*36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. 
Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro.

A segunda função fará o mesmo da primeira se e somente se o valor do elemento for maior que 5.*/


const vetorNumerico = [1,2,3,4,5];
const numeroInteiro = 3;

function retornarVetor(vetorNumerico, numeroInteiro) {
    let resultadoMultiplicacao = [];
    for (let i = 0; i < vetorNumerico.length; i++) {
        resultadoMultiplicacao.push(numeroInteiro * vetorNumerico[i]);
    }
    return resultadoMultiplicacao;
}

console.log(retornarVetor(vetorNumerico, numeroInteiro))


function executaSeMaior5(vetorNumerico, numeroInteiro) {
    let multiplicacaoElemento = []
    for (let i = 0; i < vetorNumerico.length; i++) {
        if (vetorNumerico[i] > 5) {
        multiplicacaoElemento.push(numeroInteiro * vetorNumerico[i]);
        console.log(multiplicacaoElemento) 
        } else {
            console.log(vetorNumerico[i]) 
        }   
    }
}

executaSeMaior5(vetorNumerico, numeroInteiro)

/* let vetor = [1, 2, 3, 4, 5, 6]

function multiplicaVetor(vetor, multiplicador){
    let vetorResultado = []
    vetor.forEach(elemento => {
        vetorResultado.push(elemento * multiplicador) 
    });

    return vetorResultado
}

console.log(multiplicaVetor(vetor, 3))
 */
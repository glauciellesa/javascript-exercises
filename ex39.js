/*39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.*/

let vetorA = [1, 2, 3, 4, 5]
let vetorB = [5, 4, 3, 2, 1]

function substituir(vetorA, vetorB) {
    for (let i = 0; i < vetorA.length; i++) {
        vetorA[i] = vetorA[i] + vetorB[i]
        vetorB[i] = vetorA[i] - vetorB[i]
        vetorA[i] = vetorA[i] - vetorB[i]
    }
    return [vetorA, vetorB]
  }
console.log(substituir(vetorA, vetorB))

  

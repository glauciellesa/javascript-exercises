//28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
// vetor = []
let vetorDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9,]

function imprimirQntParesImpares(vetorDeNumeros) {
    let qntPares = 0
    let qntImpares = 0
    let i = 0
    while (i < vetorDeNumeros.length) {
        if (vetorDeNumeros[i] % 2 == 0) {
            console.log(vetorDeNumeros[i])
            qntPares++
        } else {
            console.log(vetorDeNumeros[i])
            qntImpares++
        }
        i++
    }
    return [qntPares, qntImpares]
}

console.log(imprimirQntParesImpares(vetorDeNumeros))



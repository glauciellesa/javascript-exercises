/*23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.*/

// aluno e suas três notas
// o peso para a maior nota seja 4 e para as duas restantes, 3. 
// Mostre o código do aluno,
// Média calculada
/// mensagem "APROVADO" >=5
// Reprovado nota < 5

const alunos = [
    {
        codigo: 1,
        nota1: 5,
        nota2: 5,
        nota3: 5,
    },
    {
        codigo: 2,
        nota1: 10,
        nota2: 1,
        nota3: 3,
    },
    {
        codigo: 3,
        nota1: 5,
        nota2: 3,
        nota3: 1,
    }
]
function calcularNota(codigo, nota1, nota2, nota3) { // 
    let maiorNota
    let mediaCalculada
    let n2
    let n3

    if (nota1 > nota2 && nota1 > nota3) {
        maiorNota = nota1
        n2 = nota2
        n3 = nota3
    } else if (nota2 > nota3 && nota3 > nota1) {
        maiorNota = nota2
        n2 = nota3
        n3 = nota1

    } else if (nota3 > nota1 && nota3 > nota2) {
        maiorNota = nota3
        n2 = nota1
        n3 = nota2
    }
console.log(maiorNota, n2, n3)
    if (maiorNota) {
        mediaCalculada = ((maiorNota * 4) + (n2 * 3) + (n3 * 3)) / (4 + 3 + 3)
    } else {
        mediaCalculada = ((nota1 * 3) + (nota2 * 3) + (nota3 * 3)) / (3 + 3 + 3)
    }

    if (mediaCalculada >= 5) {
        return {
            codigo: codigo,
            mediaCalculada: mediaCalculada,
            Resultado: 'Aluno aprovado'
        }
    } else {
        return {
            codigo: codigo,
            mediaCalculada: mediaCalculada,
            Resultado: 'Aluno reprovado'
        }
    }
}

/* console.log(calcularNota(1, 1, 2, 3) )
console.log(calcularNota(1, 3, 2, 1) )
console.log(calcularNota(1, 3, 1, 4) )
console.log(calcularNota(1, 10, 7, 3) )
console.log(calcularNota(1, 3, 10, 7) )
console.log(calcularNota(1, 7, 3, 10) ) */

function turmaArray(array) {
    let resultado = []
    for (let i = 0; i < array.length; i++) {
    //    const aluno = array[i]
        const {codigo,nota1, nota2,nota3 } = array[i]
    //  resultado.push(calcularNota(aluno.codigo, aluno.nota1, aluno.nota2, aluno.nota3))  
    resultado.push(calcularNota(codigo, nota1, nota2, nota3))
    }
    return resultado
}
console.log(turmaArray( alunos))

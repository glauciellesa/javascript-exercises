/* 20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valorSaque informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.*/

//o mínimo de cédulas para um determinado valorSaque informado pelo usuário 
//notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1

function minimoCedulas(valorSaque) {
    let valorResto = valorSaque
    let resultado = " "
    let qntNotas100 = 0
    let qntNotas50 = 0
    let qntNotas10 = 0
    let qntNotas5 = 0
    let qntNotas1 = 0
    
    while (valorResto > 0) {
        if (valorResto >= 100) {
            valorResto -= 100
            qntNotas100++
            continue
        }
        if (valorResto >= 50) {
            valorResto -= 50
            qntNotas50++
            continue
        }
        if (valorResto >= 10) {
            valorResto -= 10 
            qntNotas10++
            continue
        }
        if (valorResto >= 5) {
            valorResto -= 5
            qntNotas5++
            continue
        }
        if (valorResto >= 1) {
            valorResto -= 1
            qntNotas1++
            continue
        }
    }
    if (qntNotas100 > 0) {
        resultado += `${qntNotas100} nota de R$ 100. `
    }
    if (qntNotas50 > 0) {
        resultado += `${qntNotas50} nota de R$ 50. `
    }
    if (qntNotas10 > 0) {
        resultado += `${qntNotas10} nota de R$ 10. `
    }
    if (qntNotas5 > 0) {
        resultado += `${qntNotas5} nota de R$ 5. `
    }
    if (qntNotas1 > 0) {
        resultado += `${qntNotas1} nota de R$ 1. `
    }
    return resultado
}

console.log(minimoCedulas(18))
console.log(minimoCedulas(260))
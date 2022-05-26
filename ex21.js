/*21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130 */

//valor a ser pago por um plano de saúde
//todos pagam R$ 100 mais um adicional conforme a seguinte tabela:

function qntPagarSaude(idade) {
    valorBase = 100
    let totalPagamento = 0
    if (idade > 0 && idade < 10) {
        totalPagamento = valorBase + 80
        return totalPagamento
    }
    if (idade < 30) {
        totalPagamento = valorBase + 50
        return totalPagamento
    }
    if (idade < 60) {
        totalPagamento = valorBase + 95
        return totalPagamento
    }
    if (idade > 60) {
        totalPagamento = valorBase + 130
        return totalPagamento
    }
}

console.log(qntPagarSaude(2))
console.log(qntPagarSaude(92))
console.log(qntPagarSaude(22))
console.log(qntPagarSaude(42))
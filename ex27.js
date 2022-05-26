/*27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.*/
//existe uma criança menor
//caso exista se a criança menor ultrapassará a maior? 
//Em quantos anos isso acontecerá.

const criancas = [
    {
        nome: 'Joao',
        altura: 70,
        taxaCrescimento: 0.15,
    },
    {
        nome: 'Pedro',
        altura: 70,
        taxaCrescimento: 0.15,
    }
]

function calcularAlturaCriancas(criancas) {
    let maiorCrianca 
    let menorCrianca

    if (criancas[0].altura > criancas[1].altura) {
        maiorCrianca = criancas[0]
        menorCrianca = criancas[1]
    } else if(criancas[0].altura < criancas[1].altura) {
        maiorCrianca = criancas[1]
        menorCrianca = criancas[0]
    } else {
        return 'Crianças com alturas iguais'
    }

    if (menorCrianca.taxaCrescimento > maiorCrianca.taxaCrescimento) {
        let crescimentoAnualMaior = maiorCrianca.altura
        let crescimentoAnualMenor = menorCrianca.altura
        let qntAnosAlturaIgual = 0
        console.log(crescimentoAnualMaior, crescimentoAnualMenor, qntAnosAlturaIgual)
        while (crescimentoAnualMenor < crescimentoAnualMaior) {
            crescimentoAnualMaior = (maiorCrianca.altura * maiorCrianca.taxaCrescimento) + crescimentoAnualMaior
            crescimentoAnualMenor = (menorCrianca.altura * menorCrianca.taxaCrescimento) + crescimentoAnualMenor
            qntAnosAlturaIgual++
            console.log(crescimentoAnualMaior, crescimentoAnualMenor, qntAnosAlturaIgual)
        }
        return qntAnosAlturaIgual
    } else {
        return "Taxa de crescimento da maior criança é maior ou igual a taxa de crescimento da menor criança, portanto nunca vão ultrapassar a altura uma da outra"
    }
    
}

console.log(calcularAlturaCriancas(criancas))
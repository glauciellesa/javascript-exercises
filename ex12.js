//12) Faça um algoritmo que calcule o fatorial de um número.
let calcularFatorial = function (numero) {
    let resultado = numero
    if (numero == 0) {
        return 1
    } else {
        for (let i = 1; i < numero; i++) {
            resultado *= i;
            console.log(i)
        }
        return resultado
    }
}

console.log(calcularFatorial(5))
console.log(calcularFatorial(0))
console.log(calcularFatorial(10))

function fatorial (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(10))

function calcular2(numero) {
    let resultado2 = numero
    let i = 1
    while (i < numero) {
        console.log(i)
        resultado2 *= i
        i++
    }
    console.log(resultado2)
}

calcular2(5)
/* 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores. */

(function operacao(num1, num2) {
    console.log(num1 + num2, num1 - num2, num1 * num2, num1 / num2)
})(1,2)
//operacao(1,2)


const opera = (num1, num2) => console.log(num1 + num2, num1 - num2, num1 * num2, num1 / num2)
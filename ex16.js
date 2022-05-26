/* 16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas*/

/* function calculadora(num1, operador, num2) {
    switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return "Operação invalida"
            break;
    }
} */

function calculadora(num1, operador, num2) {
    if (operador == '+') {
        return num1 + num2;
    }
    if (operador == '-') {
        return num1 - num2;
    }
    if (operador == '*') {
        return num1 * num2;
    }
    if (operador == '/') {
        return num1 / num2;
    }else{
        return 'Operação invalida'
    }
}

console.log(calculadora(2, '+',3))
console.log(calculadora(2, '-',3))
console.log(calculadora(2, '*',3))
console.log(calculadora(2, '/',3))
function aumentoSalario(salario, planoTrabalho) {
    switch (planoTrabalho) {
        case 'a':
            let salarioAumentoA = salario * (10/100)
            return salarioAumentoA + salario
        case 'b':
            let salarioAumentoB = salario * (15/100)
            return salarioAumentoB + salario
        case 'c':
            let salarioAumentoC = salario * (20/100)
            return salarioAumentoC + salario
        default:
            return "Plano Inválido"
    }
}

console.log(aumentoSalario(1000, 'a'))
console.log(aumentoSalario(1000, 'b'))
console.log(aumentoSalario(1000, 'c'))
console.log(aumentoSalario(1000))

/*10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.*/

let divisivelPor3 = function(inteiro) {
    if (typeof inteiro !== 'number') {
        throw NaN
    }
    if (inteiro % 3 == 0) {
        return "True"
    } else {
        return "False"
    }  
}


console.log(divisivelPor3(0))
console.log(divisivelPor3(2))
console.log(divisivelPor3(3))
console.log(divisivelPor3(723))
console.log(divisivelPor3(6))
console.log(divisivelPor3("oi"))

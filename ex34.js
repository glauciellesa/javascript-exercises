/*34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.*/

function retornaTrueFalse(valor1, valor2) {
    const splitValor1 = valor1.toLowerCase().split('')
    const splitValor2 = valor2.toLowerCase().split('')

    let maiorArray
    let menorArray

    if (splitValor1.length < splitValor2.length) {
        maiorArray = splitValor2
        menorArray = splitValor1
    } else {
        maiorArray = splitValor1
        menorArray = splitValor2
    }
    //console.log(maiorArray, menorArray)
    let i = 0;
    while (i < menorArray.length) {
        let achei;
        let j = 0;
        while (j < maiorArray.length) {
            if (menorArray[i] == maiorArray[j]) {
                achei = menorArray[i]
                break
            }
            j++ 
        }
        if (achei == undefined) {
            return false
        }
        i++
    }
    return true
}



/*   
  for (let i = 0; i < menorArray.length; i++) {
      let achei
      for (let j = 0; j < maiorArray.length; j++) {
          if (menorArray[i] == maiorArray[j]) {
              achei = menorArray[i]
              break
          }
      }
      if (achei == undefined) {
          return false
      }
  }
  return true
} */

console.log(retornaTrueFalse('adeeeeeFgHi', 'eeccc'))
console.log(retornaTrueFalse('eeccc', 'acdeeeeeFgHi'))


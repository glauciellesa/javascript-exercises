/*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/
//(param1, param2, …, paramN) => expression
// equivalente a: => { return expression; }

let funcaoResto = ((dividendo, divisor) => { 
    console.log( `O resultado da divisão é: ${dividendo / divisor}.`);
    console.log(`O resto da divisão é igual a: ${dividendo % divisor}.`)
})


funcaoResto(10, 4)
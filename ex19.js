function calcularProduto(codigo, qtd) {
    switch (codigo) {
        case 100:
            let calcular1 = qtd * 3.00
            return `O valor a ser pago por ${qtd} cachorro(s) quente é: R$ ${calcular1.toFixed(2)}. `   
        case 200:
            let calcular2 = qtd * 4.00
            return `O valor a ser pago por ${qtd} Hambúrguer simples é: R$ ${calcular2.toFixed(2)}. `   
        case 300: 
            let calcular3 = qtd * 5.50
            return `O valor a ser pago por ${qtd} cheeseburguer é: R$ ${calcular3.toFixed(2)}. ` 
        case 400:
            let calcular4 = qtd * 7.50
            return `O valor a ser pago por ${qtd} bauru é: R$ ${calcular4.toFixed(2)}. `    
        case 500:
            let calcular5 = qtd * 3.50
            return `O valor a ser pago por ${qtd} refrigerante é: R$ ${calcular5.toFixed(2)}. `    
        case 600:
            let calcular6 = qtd * 2.80
            return `O valor a ser pago por ${qtd} suco é: R$ ${calcular6.toFixed(2)}. `   

        default:
            return 'Produto não existente'
    }
}

console.log(calcularProduto(100,3))
console.log(calcularProduto(300,3))
console.log(calcularProduto(500,3))
console.log(calcularProduto(600,3))
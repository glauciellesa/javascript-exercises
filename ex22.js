/* 22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido. */

//anuidade deve ser paga no mês de janeiro 
//Por mês, é cobrado 5% de juros (sob o regime de juros compostos)
// O retorno deve ser o valor a ser pago para o respectivo mês escolhido.

function anuidadeAssociacao(mesPagamento, valorAnuidade) {
   const taxaJuros = 5/100 
   if (mesPagamento > 0 && mesPagamento < 13) {
        let atraso = mesPagamento - 1
      return (valorAnuidade * ((1 + taxaJuros)** atraso)).toFixed(2) 
   }else {
       return 'Mês inválido'
   }
}

console.log(anuidadeAssociacao(1, 100))
console.log(anuidadeAssociacao(4, 100))
console.log(anuidadeAssociacao(10, 100))
console.log(anuidadeAssociacao(0, 100))



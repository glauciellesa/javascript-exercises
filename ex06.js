/* ) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

let jurosSimples = function(capInicial, taxaJuros, tempo) {
    let juros = capInicial * (taxaJuros / 100) * tempo
    let montante = capInicial + juros
    return montante
}

let jurosComposto = function(capInicial, taxaJuros, tempo) {
    console.log({ 
        capInicial: capInicial,
        txj: (1 + taxaJuros / 100),
        tempo: tempo,
        txj_tmepo: (1 + taxaJuros / 100)**tempo
    })

    console.log("Bonito", jurosSimples(capInicial, taxaJuros, tempo))

    let montante = capInicial * ((1 + taxaJuros / 100) ** tempo)
    return montante
    
}

console.log(jurosSimples(1.200, 5, 4))
console.log(jurosComposto(1.200, 5, 4))
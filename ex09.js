/* 09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.*/

//Todo aluno recebe uma nota de 0 a 100
//Alunos com nota abaixo de 40 são reprovados
// Regra arredondamento:
/*Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5*/

function calcularNota(nota) {
    verificarNota(nota)
    return arredondarNota(nota)
}

function verificarNota(nota) {
    if (typeof nota !== 'number') {
        throw NaN
    }
    if (nota < 0 || nota > 100) {
        throw "Nota invalida"
    }
    if (nota < 38) {
        throw "Reprovado!!"
    }  
}

function arredondarNota(nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    } 
}



/* function calcularNota(nota) {

    if (nota > 0 && nota < 100) {
        if (nota < 38) {
            return "Reprovado!!"
        }
        if (nota % 5 > 2) {
            return nota + (5 - (nota % 5))
        }
        return nota
    } else {
        return "Nota invalida"
    }

} */

try {
    console.log(calcularNota())
} catch (error) {
    console.log(error)
}
try {
    console.log(calcularNota(undefined))
} catch (error) {
    console.log(error)
}
try {
    console.log(calcularNota(null))
} catch (error) {
    console.log(error)
}
try {
    console.log(calcularNota(""))
} catch (error) {
    console.log(error)
}
try {
    console.log(calcularNota(-1))
} catch (error) {
    console.log(error)
}
try {
    console.log(calcularNota(34))
} catch (error) {
    console.log(error)
}
try {
    console.log(calcularNota(73))
    console.log(calcularNota(67))
    console.log(calcularNota(38))
    console.log(calcularNota(84))
    console.log(calcularNota(58))
    console.log(calcularNota(59))
} catch (error) {
    console.log(error)
}
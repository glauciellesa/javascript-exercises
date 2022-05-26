/* Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.*/

function diaDaSemana(dia) {
    switch (dia) {
        case 1:
            return "Domingo é fim de semana";
            break;
        case 2: 
            return "Segunda-Feira é dia útil";
            break;
        case 3:
            return "Terça-Feira é dia útil";
            break;
        case 4:
            return "Quarta-Feira é dia útil";
            break;
        case 5:
            return "Quinta-Feira é dia útil";
            break;
        case 6:
            return "Sexta-Feira é dia útil";
            break;
        case 7:
            return "Sábado-Feira é dia útil";
            break;
        default:
            return "Dia inválido."
            break;
    }
}

console.log(diaDaSemana(2))
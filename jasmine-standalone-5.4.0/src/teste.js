// código fonte

// function inteiro(inteiro) {
//     return inteiro;
// }


// fizz buzz
// function jogo(numero){

//     if (numero %3 == 0) {
//         return "Fizz"
//     }
//     if (numero %5 == 0) {
//         return "Buzz"
//     }

//     return numero;
// }

// const aluno = (nota, media) => {
//     let resultado;
//     let desempenho = 3;
//     if(desempenho >= 7) {
//         resultado = "Aprovado"
//     } else {
//         resultado = "Reprovado"
//     }

//     return resultado;
// }

// class Pessoa {
//     constructor(_Nome, _SobreNome, _Idade){

//         let nome = _Nome;
//         let sobrenome = _SobreNome;
//         let idade = _Idade;

//         this.nome = () => {
//             return nome
//         }
//         this.nome_completo = () => {
//             return nome + ' ' + sobrenome
//         }
//         this.nome_tudo = () => {
//             return nome + ' ' + sobrenome + ' tem idade de ' + idade;
//         }
//     }
// }

//exercício 1
function multiplicarTresNumeros(num1, num2, num3){
    let multi = num1 * num2 * num3;
    return multi
}

//exercício 2
function dividir(num1, num2){
    let divisao = num1 / num2;

    if (num2 == 0) {
        return "Não é possível dividir por 0"
    } else {
        return divisao
    }
}

//exercício 3
function celsiusFahrenheit(temperatura){
    let converter = temperatura * 1.8 + 32;
    return converter
}

function fahrenheitCelsius(temperatura){
    let converter = (temperatura - 32) / 1.8;
    return converter
}

//exercício 4
function calcularMedia(num1, num2, num3){
    let media = (num1 + num2 + num3) / 3;
    return media
}

//exercício 5
function contarCaracteres(texto){
    let quant = texto.length;
    return quant
}

//exercício 6
function calculadora(num1, num2, sinal){
    let operacao = sinal;

    if (operacao == "+") {
        resultado = num1 + num2;
    } else if (operacao == "-") {
        resultado = num1 - num2
    } else if (operacao == "*") {
        resultado = num1 * num2
    } else if (operacao == "/") {
        resultado = num1 / num2
    }

    return resultado
}
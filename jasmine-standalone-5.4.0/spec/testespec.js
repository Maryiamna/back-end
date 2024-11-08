// teste do software

// it("Lista de Teste", function (){
//     expect(inteiro(1)).toBe(1);
//     expect(inteiro(2)).toBe(2);
//     expect(inteiro(3)).toBe(3);
//     expect(inteiro(4)).toBe(4);
// })

// describe("Teste de números", function(){
//     it("Fizz Buzz", function() {
//         expect(jogo(1)).toBe(1);
//         expect(jogo(2)).toBe(2);
//         expect(jogo(3)).toBe("Fizz");
//         expect(jogo(4)).toBe(4);
//         expect(jogo(5)).toBe("Buzz");
//         expect(jogo(6)).toBe("Fizz");
//         expect(jogo(7)).toBe(7);
//         expect(jogo(8)).toBe(8);
//         expect(jogo(9)).toBe("Fizz");
//         expect(jogo(10)).toBe("Buzz");
//     })
// })

// describe("Teste de média", function() {
//     it("Resultado", function() {
//         let res = aluno();
//         expect(res).toEqual("Reprovado")
//     })
// })

// describe("Pessoas", function() {
//     let nome = "Mariana";
//     let sobrenome = "Chaves";
//     let idade = 17;

//     let pessoa = new Pessoa(nome, sobrenome, idade);

//     it('Teste - Nome', function() {
//         expect("Mariana").toBe(pessoa.nome())
//     })
//     it('Teste - Nome e Sobrenome', function() {
//         expect("Mariana Chaves").toBe(pessoa.nome_completo())
//     })
//     it('Teste - Nome, Sobrenome e Idade', function() {
//         expect("Mariana Chaves tem idade de 17").toBe(pessoa.nome_tudo())
//     })
// })

//exercício 1
it("Multiplicar três números", function (){
    expect(multiplicarTresNumeros(2, 3, 4)).toBe(24)
});

//exercício 2
it("Divisão", function(){
    expect(dividir(10, 2)).toBe(5);
    expect(dividir(7, 0)).toBe("Não é possível dividir por 0")
})

//exercício 3
it("Converter temperatura", function() {
    expect(celsiusFahrenheit(0)).toBe(32);
    expect(fahrenheitCelsius(32)).toBe(0)
})

//exercício 4
it("Calcular média aritimética", function() {
    expect(calcularMedia(3, 4, 5)).toBe(4);
    expect(calcularMedia(10, 20, 30)).toBe(20)
})

//exercício 5
it("Contar caracteres", function() {
    expect(contarCaracteres("hello")).toBe(5);
    expect(contarCaracteres("12345")).toBe(5)
})

//exercício 6
it("Calculadora", function() {
    expect(calculadora(4, 2, "+")).toBe(6);
    expect(calculadora(4, 2, "/")).toBe(2)
})
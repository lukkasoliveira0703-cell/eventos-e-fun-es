//FUNÇÕES- 

/*

ALERT ()
PROMPT ()
CONSOLE.CLEAR()
CONSOLE.LOG()
CONFIRM()
FOR()
WHILE()
IF()
ELSE()

SINTAXE FUNÇÕES-

FUNÇÃO SIMPLES
function nomedafunção () {
    //oque sera feito dentro das chaves
}
Precisa ser chamada = nomedafuncao()
*/


//FUNÇOES SIMPLES

function saudacao(){
    alert("Bem vindo ao meu site")
}

//FUÇÃO COM PARAMETROS

//Sempre q for chamada o usuario precisa colocar dois valores no site.

function soma(valor1, valor2){
    let resutado = valor1 + valor2 
    return resutado
//para retornar algo dentro de uma função, pra isso cerve o "return". 
}

console.log(soma(50,70))

//Fução para retorna o dobro dos resultados
function dobro (valor1){
    let resutado = valor1 * valor2
    return resutado
}
console.log(dobro(2, 4))

//funcão dobro

function dobro(valor){
    let resultado = valor * 2
    return resultado
}
console.log(dobro(10))
alert (dobro(10))

//funções do nome personalizado

function saudacaodousuario(){
    let nome = prompt(`digite seu nome`) 
    return `seja bem vindo ao site ${nome}` 
}
console.log(saudacaodousuario())

//caulcular o valor de desconto
const precodoproduto = Number( prompt("digite o preço do produto"))
const descontodoproduto =Number( prompt("digite o desconto do produto"))

 function caulculardesconto(preco, desconto){
    let precodoproduto = preco - (preco * desconto / 100)
    
    return precodoproduto
 }
 console.log(`O preco de ${precodoproduto} com desconto de ${descontodoproduto}% é igual a R$${caulculardesconto(precodoproduto,descontodoproduto)}`)
//Eventos com onclick

//document.getElementById("id da tag no html")

function mudartexto(){
    document.getElementById("texto").innerText = "Oliveira"
}
 
//função para aacessar o css atravex do javascript
function entrar(){
    let caixa = document.getElementById("caixa")
    //innertext para mudar o texto dentro da caixa
    caixa.innerText = "opa voce conseguiu!!"
    caixa.style.backgroundColor = "green";
}
//funçao para a caixa mudar ao sair o mouse
function sair(){
    let caixa2 = document.getElementById("caixa")
    caixa2.innerText="voltou para o original"
    caixa2.style.backgroundColor = "white"
}

/*const input = document.getElementById("nome")
function mostrartexto(){

}*/

function mudarcor(){
    let corEscolhida = document.getElementById("cor").value;
    document.body.style.backgroundColor = corEscolhida;
}

function clicou() {
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!!";
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://globallabs.academy/");
    //window.location.href = "https://globallabs.academy/";
}

function trocar(elemento) {
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value)
}


/*function soma (n1,n2) {
  return n1 + n2;
}

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}

alert(soma(5,10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));

var lista = ["Alemanha", "Grecia", "Portugal"]
lista.push("Brasil");
lista.pop("Grecia");
console.log(lista);


var d = new Date(); 
   alert(d.getDay());


var count;
for(count = 0; count <= 5; count++) {
    alert(count);
}

 var count = 0;
while (count <= 5) {
     console.log(count);
     count++;
}

var nome = prompt("Qual é o seu nome? ");
var idade = prompt("Qual sua idade? ");
if(idade >=18) {
    alert(nome + "," + " você é maior de idade.");
}else {
    alert(nome + "," + " você é menor de idade.");
}


var nome= "Fabricio Rezende";
var idade = 44;
var idade2 = 10;
alert(nome + " você tem " + idade + " anos");
alert(idade + idade2);
*/
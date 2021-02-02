//------------- AULA 1 ------------
 //var nome = "Rafael Galleani";
 //var idade = 29;
 //var idade2 = 10;
 //var frase = "Japão é o melhor time do mundo";

 //alert(nome + " tem " + idade + " anos");
 //alert(idade + idade2);

 //console.log(nome);
 //console.log(idade + idade2);
 //console.log(frase.replace("Japão", "Brasil"));
 //console.log(frase.toUpperCase()); //toLowerCase(minusculo)

//------------- AULA 2 ------------

// ---ARRAY---
 //var lista = ["maça", "pera", "laranja"];
 //lista.push("uva"); // colocar elemento na lista
 //lista.pop(); //retirar elemento
 //console.log(lista); //console.log(lista[1]);
 //console.log(lista.length); //mostrar quantidade de elementos na lista
 //console.log(lista.reverse()); //mostrar lista de tras para frente
 //console.log(lista.toString()); //deixa o formato array para o formato string
 //console.log(lista.join(" - "));
 
// ---DICIONÁRIO---
 //var fruta = {nome:"maça", cor:"vermelha"};
 //console.log(fruta);
 //console.log(fruta.nome);

 // ---LISTA DE DICIONÁRIOS---
 //var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
 //console.log(frutas[0]);

//------------- AULA 3 ------------
 //var idade = prompt("Qual sua idade");
 //if(idade >= 18){
 //    alert("maior de idade");
 //}else{
 //    alert("menor de idade");
 //};

 //var count = 0;
 //while(count < 5){
 //    console.log(count);
 //    count = count + 1; //count ++;
 //};

 //var count;
 //for(count=0; count <= 5; count++){
 //    alert(count);
 //}

// ---DATE---
 //var d = new Date();
 //alert(d.getMinutes());
 //alert(d.getDay());
 //alert(d.getHours());

//------------- AULA 4 ------------
// function soma(n1, n2){
 //    return n1 + n2;
 //}

 //alert(soma(5, 10));

 //function setReplace(frase, nome, novo_nome){
 //    return frase.replace(nome, novo_nome);
 //}

 //alert(setReplace("Vai Japão", "Japão", "Brasil"));

//function validaIdade(idade){
 //   var validar;
 //   if(idade >= 18){
 //       validar = true
 //   }else{
 //      validar = false
 //   }
 //   return validar;
//}

//var idade = prompt("Qual é sua idade?");
//console.log(validaIdade(idade));

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"; //pelo id traz esse elemento
 //  console.log(document.getElementById("agradecimento"));
 //  alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.twitch.tv");//abrir o site em outra aba
    //window.location.href = "https://www.twitch.tv";//abrir pagina na mesma aba
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
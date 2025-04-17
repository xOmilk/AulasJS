function eventoClick() {
    /* alert("Acionou um evento de click "); */
    if (document.body.style.backgroundColor == "red") {
        document.body.style.backgroundColor = "blue";
    }
    else {
        document.body.style.backgroundColor = "red";

    }
}



function eventoDblClick() {
    alert("VOCE CLICOU DUAS VEZES");
    document.getElementById = "botao2".style.backgroundColor = "black";
}


function onMouseOver() {
 /*    alert("ok"); */
    let div=document.getElementById("teste");
    div.style.backgroundColor = "red";

    if(div.style.backgroundColor == "red"){
        div.style.backgroundColor = "black";
        div.style.border="solid 2px black";
        div.style.backgroundColor="white";
    }
    
}

function adicionaTexto() {
    let p=document.getElementById("texto");
    p.append("O mouse moveu");
}
function onMouseUp(){

}

function focar(){
    /* alert("focado"); */
}

function limpaTexto(){
    document.getElementById("idCampoTexto").value= ""
}

function mudou(){
    alert("MUDOU");
}

function teclaPressionada(){
    let input= document.getElementById("novoInput").value;
    alert(input);

}

function carregou(){
    alert("A pagina terminou de carregar");
}

function resize(){
    alert("Você redimensionou a pagina");
}
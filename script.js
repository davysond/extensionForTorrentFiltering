"use strict";

if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", cleaning);
}
else{
    cleaning();
}

function cleaning(){
    let i;
    let imagem;
    var elements = document.getElementsByClassName("list-entry");
    for(i = 0; i < elements.length; i++){
        imagem = elements[i].getElementsByClassName("item-icons")[0];
        imagem = imagem.querySelector("span.item-icons > img");
        if(!imagem){
            elements[i].style.visibility = "hidden";
            continue;
        }
    }
}
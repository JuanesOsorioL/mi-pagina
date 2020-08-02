/*
///antes///

function $( selector ) {  
    const elements = document.querySelectorAll( selector );
    return ( elements.length > 1 ) ? 
            elements : 
            document.querySelector(selector);
        }


const barra =$('i.fa-bars');
const cerrar =$('i.fa-close');
const menu =$('div.menu');


const activo = function(){
    barra.classList.add('ocultar');
    cerrar.classList.remove('ocultar');
    menu.classList.remove('ocultar');
}
const desactivo = function(){
    barra.classList.remove('ocultar');
    cerrar.classList.add('ocultar');
    menu.classList.add('ocultar');
}
barra.addEventListener('click', function(){
    activo();
})
cerrar.addEventListener('click', function(){
    desactivo();
})
*/


///ocultar y esconder el menu///
function menu (){
    document.getElementById("menu").classList.toggle("ocultar");
    document.getElementById("menu_open").classList.toggle("ocultar");
    document.getElementById("menu_close").classList.toggle("ocultar");
    document.getElementById("menu_navbar").classList.toggle("ocultar");
}

document.getElementById("menu_open").onclick=function(){
    menu();
}
document.getElementById("menu_close").onclick=function(){
    menu();
}












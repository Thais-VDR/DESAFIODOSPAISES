const filtrarPaises = document.querySelector('header input')

const cards = document.querySelectorAll('.row card')

filtrarPaises.addEventListener('button', filtrarCards)
console.log('oio')

function filtrarCards(){

    if(filtrarPaises.value != ''){
        
for(let card of cards){

let titulo = card.querySelector('h5')

titulo = titulo.textContent

let filtroTexto = filtrarPaises.value

if(titulo.includes(filtroTexto)){
card.style.display = "none"
}
else{
    card.style.display = "block"
}

}
    }else{
for(let card of cards){
    card.style.display = "block"
}
    }
}
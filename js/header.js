window.addEventListener("load", function () {

let formulario=document.querySelector(".formulario")
let buscar=document.querySelector(".buscar")

formulario.addEventListener("submit",function(event){
    event.preventDefault()
    if(buscar.value.length<3){
        alert("La busqueda debe tener al menos 3 caracteres")
    }
    else{
        this.submit()
    }
})


})
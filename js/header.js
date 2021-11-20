window.addEventListener("load", function () {

let formulario=document.querySelector(".formulario")
let buscar=document.querySelector(".buscar")

formulario.addEventListener("submit",function(event){
    event.preventDefault()
    if(buscar.value==""){
        alert("No has ingresado ningun termino")
    }

    else if( buscar.value.length<3){
        alert ("Debes ingresar al menos 3 caracteres")
    }
    else{
        this.submit()
    }
})


})
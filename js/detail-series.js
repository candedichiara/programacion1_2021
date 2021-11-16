window.addEventListener("load",function(){

    let string = location.search
    let url = new URLSearchParams(string);
   let id = url.get("id")
   fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=583130cf3b1ec0008be028545f8f0cff&language=en-US
   `)
.then(function(info){
    return info.json()
})
 .then(function(response){
    let article = document.querySelector(".articlepeakyblinders")
    let generos = response.genres
    console.log (response.genres)
    article.innerHTML +=`
    <h1 class="titulopeaky">${response.name}</h1>
    <h3 class="textopeaky">${response.vote_average}/10</h3>`


    generos.forEach(genero => {
        article.innerHTML += `<h2 class="textopeaky">${genero.name}</h2>`
    });
    article.innerHTML+=
    `<h3 class="textopeaky">${response.first_air_date}</h3>
    <h4 class="textopeaky">${response.episode_run_time}mins</h4>`

    let imagenes = document.querySelector(".fotopb")
imagenes.innerHTML +=
    `<img class="fotopb" src="https://api.themoviedb.org/3/tv/${response.poster_path}/images?api_key=583130cf3b1ec0008be028545f8f0cff&language=en-US">`

    console.log(response)
let parrafo = document.querySelector(".sinopsispeaky")
parrafo.innerText += response.overview
})


})
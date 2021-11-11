window.addEventListener("load", function () {

    let string = location.search
    let url = new URLSearchParams(string);
    let id = url.get("id")
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=583130cf3b1ec0008be028545f8f0cff&language=en-US`)
        .then(function (info) {
            return info.json()
        })
        .then(function (response) {
            let article = document.querySelector(".articlemovie")
            let generos = response.genres
            console.log(response.genres)
            article.innerHTML +=
                `
    <h1 class="tituloryf">${response.title}</h1>
    <h3 class="textoryf">${response.vote_average}/10</h3>`



            generos.forEach(genero => {
                article.innerHTML += `<h2 class="textoryf">${genero.name}</h2>`
            });
            article.innerHTML +=
                `<h3 class="textoryf">${response.release_date}</h3>
    <h4 class="textoryf">${response.runtime}mins</h4>`

            let imagenes = document.querySelector(".fotoryf")
            imagenes.innerHTML +=
                `<img class="imagenryf" src="https://image.tmdb.org/t/p/w500/${response.poster_path}">`

            console.log(response)
            let parrafo = document.querySelector(".sinopsisryf")
            parrafo.innerText += response.overview

        })

    let favoritos = document.querySelector(".favoritosmovie");
    favoritos.innerHTML +=
        `<a href="./favorite.html">AÑADIR A FAVORITOS</a>`
})

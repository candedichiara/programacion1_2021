window.addEventListener("load", function () {

    let string = location.search
    let url = new URLSearchParams(string);
    let id = url.get("id")
    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=583130cf3b1ec0008be028545f8f0cff&language=en-US
   `)
        .then(function (info) {
            return info.json()
        })
        .then(function (response) {
            let article = document.querySelector(".articlepeakyblinders")
            let generos = response.genres
            console.log(response.genres)
            article.innerHTML += `
    <h1 class="titulopeaky">${response.name}</h1>
    <h3 class="textopeaky">${response.vote_average}/10</h3>`


            generos.forEach(genero => {
                article.innerHTML += `<h2 class="textopeaky"><a href="detail-generos.html?id=${genero.id}&name=${genero.name}">${genero.name}</a></h2>`
            });
            article.innerHTML +=
                `<h3 class="textopeaky">${response.first_air_date}</h3>
    <h4 class="textopeaky">${response.episode_run_time}mins</h4>`

            let imagenes = document.querySelector(".fotopb")
            imagenes.innerHTML +=
                `<img class="imagenpb" src="https://image.tmdb.org/t/p/w400/${response.poster_path}">`

            console.log(response)
            let parrafo = document.querySelector(".sinopsispeaky")
            parrafo.innerText += response.overview
        })

        let listaFavoritos = []

        let recuperoStorage = localStorage.getItem("favoritosserie");
        console.log(recuperoStorage);
    
        if (recuperoStorage && recuperoStorage != null) {
            listaFavoritos = JSON.parse(recuperoStorage)
        }
    
        let favoritosmovie = document.querySelector(".favoritosmovie");
    
        if (listaFavoritos.includes(id)) {
            favoritosmovie.innerHTML = `
            QUITAR DE FAVORITOS`
        }
        favoritosmovie.addEventListener("click", function (e) {
            e.preventDefault();
    
            if (listaFavoritos.includes(id)) {
    
                let aBorrar = listaFavoritos.indexOf(id);
                listaFavoritos.splice(aBorrar, 1);
                favoritosmovie.innerHTML = `
                AGREGAR A FAVORITOS`
            }
            else {
    
                listaFavoritos.push(id);
                favoritosmovie.innerHTML = `
                QUITAR DE FAVORITOS`
            }
    
            let favStorage = JSON.stringify(listaFavoritos);
            localStorage.setItem("favoritosserie", favStorage);

        })

})
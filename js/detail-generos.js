window.addEventListener("load", function () {
    let querystring = location.search;
    let query2 = new URLSearchParams(querystring)
    let idGenero = query2.get("id")
    let nombreGenero= query2.get("name")

    let type=query2.get("type")

    if(type=="movies"){
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=032a1cc5e170bb64ead032809385412a&language=en-US&with_genres=${idGenero}&sort_by=popularity.desc`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
            let tituloGenero = document.querySelector(".tituloGenero");
            let listaGenero=document.querySelector(".listaGenero");
            tituloGenero.innerHTML+=`<h1> Peliculas del genero: ${nombreGenero}
            </h1>`
            for (let i = 0; i < data.results.length ; i++) {
                listaGenero.innerHTML += `
                <li class="elemento"><a href="detail-movie.html?id=${data.results[i].id}"> <img class= "destacar" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}">
                <h3> ${data.results[i].title} </h3>
                <p>Fecha de estreno: ${data.results[i].release_date} </p>
                </a>
            </li>`
            }
    
        })
        .catch(function (error) {
            console.log(error)
        })

    }

    else{
        fetch(`https://api.themoviedb.org/3/discover/tv?api_key=032a1cc5e170bb64ead032809385412a&language=en-US&with_genres=${idGenero}&sort_by=popularity.desc`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
            let tituloGenero = document.querySelector(".tituloGenero");
            let listaGenero=document.querySelector(".listaGenero");
            tituloGenero.innerHTML+=`<h1> Series del genero: ${nombreGenero}
            </h1>`
            for (let i = 0; i < data.results.length ; i++) {
                listaGenero.innerHTML += `
                <li class="elemento" ><a href="detail-serie.html?id=${data.results[i].id}"> <img class="destacar" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}">
                <h3> ${data.results[i].name} </h3>
                <p>Fecha de estreno: ${data.results[i].first_air_date} </p>
                </a>
            </li>`
            }
    
        })
        .catch(function (error) {
            console.log(error)
        })
    }

   










    
})
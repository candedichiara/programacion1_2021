window.addEventListener("load", function () {
    //Fetch de peliculas populares 

    fetch("https://api.themoviedb.org/3/movie/popular?api_key=032a1cc5e170bb64ead032809385412a&language=en-US&page=1")

        .then(function (response) {
            return response.json()
        })

        .then(function (data) {
           
            let peliculasPopulares = document.querySelector(".peliculasPopulares")
            
            for (let i = 0; i < 5; i++) {

                peliculasPopulares.innerHTML += `
                <li class="elemento">
                <a href="detail-movie.html?id=${data.results[i].id}">  
                <img class="destacar" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}"> 
                <h3> ${data.results[i].title} </h3>
                <p>Fecha de estreno: ${data.results[i].release_date} </p>
                </a>
            </li>`

            }
        })

        .catch(function (error) {
            console.log(error)
        }
        )

    //Fetch de series populares 
    fetch("https://api.themoviedb.org/3/tv/popular?api_key=032a1cc5e170bb64ead032809385412a&language=en-US&page=1")
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            
            let seriesPopulares = document.querySelector(".seriesPopulares")
            for (let i = 0; i < 5; i++) {

                seriesPopulares.innerHTML += `
            <li class="elemento"><a href="detail-serie.html?id=${data.results[i].id}"> <img class="destacar" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}">

            <h3> ${data.results[i].name} </h3>
            
            <p>Fecha de estreno: ${data.results[i].first_air_date} </p>
            </a>
        </li>`

            }
        })

        .catch(function (error) {
            console.log(error)
        }
        )

    //Fetch de peliculas mas valoradas 
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=032a1cc5e170bb64ead032809385412a&language=en-US&page=1")
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            
            let pelisValoradas = document.querySelector(".pelisValoradas")
            for (let i = 0; i < 5; i++) {

                pelisValoradas.innerHTML += `
            <li class="elemento"><a href="detail-movie.html?id=${data.results[i].id}"> <img class="destacar" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}">

            <h3> ${data.results[i].title} </h3>
            
            <p>Fecha de estreno:${data.results[i].release_date} </p>
            </a>
        </li>`

            }
        })

        .catch(function (error) {
            console.log(error)
        }
        )

    //Fetch de series mas valoradas 
    fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=032a1cc5e170bb64ead032809385412a&language=en-US&page=1")
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            
            let seriesValoradas = document.querySelector(".seriesValoradas")
            for (let i = 0; i < 5; i++) {

                seriesValoradas.innerHTML += `
                <li class="elemento"><a href="detail-movie.html?id=${data.results[i].id}"> <img class="destacar" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}">

                <h3> ${data.results[i].name} </h3>
                
                <p>Fecha de estreno:${data.results[i].first_air_date} </p>
                </a>
            </li>`

            }
        })
        .catch(function (error) {
            console.log(error)
        }
        )
})
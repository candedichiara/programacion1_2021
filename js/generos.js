window.addEventListener("load", function () {

    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=032a1cc5e170bb64ead032809385412a&language=en-US")
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data.genres);
            let generosPeliculas = document.querySelector(".listaGenerosPeliculas");
            for (let i = 0; i < data.genres.length ; i++) {

                console.log(data.genres[i]);

                generosPeliculas.innerHTML += `
                <li><a href="detail-generos.html?id=${data.genres[i].id}&name=${data.genres[i].name}"> 
                
                ${data.genres[i].name}
                
                </a>
            </li>`

            }
            console.log(generosPeliculas)
        })
        .catch(function (error) {
            console.log(error)
        })

        fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=032a1cc5e170bb64ead032809385412a&language=en-US")
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data.genres);
            let generosSeries = document.querySelector(".listaGenerosSeries");
            for (let i = 0; i < data.genres.length ; i++) {

                console.log(data.genres[i]);

                generosSeries.innerHTML += `
                <li><a href="detail-generos.html?id=${data.genres[i].id}"> 
                
                ${data.genres[i].name}
                
                </a>
            </li>`

            }
            console.log(generosPeliculas)
        })
        .catch(function (error) {
            console.log(error)
        })
})



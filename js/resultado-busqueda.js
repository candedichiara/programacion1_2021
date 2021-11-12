window.addEventListener("load", function () {

    let querystring = location.search;
    let query2 = new URLSearchParams(querystring)
    let busqueda = query2.get("busqueda")

    let resultado=document.querySelector(".resultado")
    resultado.innerHTML+=`Esta viendo resultados de: ${busqueda}`

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=032a1cc5e170bb64ead032809385412a&language=en-US&query=${busqueda}&page=1`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)

            let resultadoBusqueda = document.querySelector(".resultadoBusqueda")

            if(data.results.length==0){
                resultadoBusqueda.innerHTML+="<h1>Lo sentimos no existen resultados </h1>"
            }
            
            else{
                for (let i = 0; i <5; i++) {

                    resultadoBusqueda.innerHTML += `<h2> ${data.results[i].title} </h2>
                    <li class="elemento"><a href="detail-movie.html?id=${data.results[i].id}"> <img class="destacar" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}">
                    
                    <p>Fecha de estreno: ${data.results[i].release_date} </p>
                    </a>
                </li>`
    
    
                }
            }
            
        })

        .catch(function (error) {
            console.log(error)
        }
        )

        fetch(`https://api.themoviedb.org/3/search/tv?api_key=032a1cc5e170bb64ead032809385412a&language=en-US&query=${busqueda}&page=1`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            let resultadoSerie = document.querySelector(".resultadoSerie")
            
            if(data.results.length==0){
                resultadoSerie.innerHTML+="<h1>Lo sentimos no existen resultados </h1>"
                console.log("No hay reusltado")
            }

            else{
                for (let i = 0; i <5; i++) {

                    resultadoSerie.innerHTML += `<h2> ${data.results[i].name} </h2>
                    <li class="elemento"><a href="detail-movie.html?id=${data.results[i].id}"> <img class="destacar" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}">
                    
                    <p>Fecha de estreno: ${data.results[i].first_air_date} </p>
                    </a>
                </li>`
    
    
                }

            }
            
        })

        .catch(function (error) {
            console.log(error)
        }
        )
    




})
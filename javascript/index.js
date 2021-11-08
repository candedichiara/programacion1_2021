fetch( "https://api.themoviedb.org/3/movie/popular?api_key=583130cf3b1ec0008be028545f8f0cff&language=en-US&page=1")
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
})
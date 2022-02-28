import useState from './useState.js'

// Variables
const KEY = "da4c8a4fb00b774b6b81692089eed935"
const setMovieName = document.getElementById('searchCheck')
const inputSearch = document.getElementById('SearchInput')
const buttonSearch = document.getElementById('ButtonSearch')
const searchReturn = document.getElementById('SearchResult')

// gey title by ID
const getTitle = () => {
    fetch(`https://api.themoviedb.org/3/movie/76341?api_key=${KEY}&language=pt-BR`)
    .then(res => res.json())
    .then(data => {
        // buttonSearch.addEventListener("click", function(){setMovieName.innerText = data.title})
    })
}

// Realizar a pesquisa
const search = () => {
    buttonSearch.addEventListener('click', () => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${inputSearch.value}&language=pt-BR`)
        .then(res => res.json())
        .then(data => {     
            const arrayResults = data['results']        
            const mapMovies = arrayResults.map(function(movies, index){
                console.log(movies.title)
                // return `<li>${movies.title}</li>`
            })
            // searchReturn.innerHTML = mapMovies
        })
    })
}

search()
getTitle()


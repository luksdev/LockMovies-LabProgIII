import useState from './useState.js'

// Variaveis/Constantes
const KEY = "da4c8a4fb00b774b6b81692089eed935"
const setMovieName = document.getElementById('searchCheck')
const inputSearch = document.getElementById('SearchInput')
const buttonSearch = document.getElementById('ButtonSearch')
const searchReturn = document.getElementById('SearchResult')
const titleSearchResult = document.getElementById('title-search-result')

// Pega o título do filme pelo ID
const getTitle = () => {
    fetch(`https://api.themoviedb.org/3/movie/76341?api_key=${KEY}&language=pt-BR`)
    .then(res => res.json())
    .then(data => {
        // buttonSearch.addEventListener("click", function(){setMovieName.innerText = data.title})
    })
}

// Realizar a pesquisa
const search = () => {
    inputSearch.addEventListener('keyup', () => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${inputSearch.value}&language=pt-BR`)
        .then(res => res.json())
        .then(data => {  
            console.log('Search ok')
            const arrayResults = data['results']        
            const mapMovies = arrayResults.map(function(movies, index){
                console.log(movies.title)
            })
        })
        .catch(err => console.log(`Ocorreu um erro: ${err}`))
    })
}

// Função para ocultar banner e aparecer área de resultados da pesquisa
const setVisibleSection = () =>{
    inputSearch.addEventListener('keyup', () =>{
        const sectionsContainer = document.getElementById('banner-movie')
        const sectionSearch = document.getElementById('search-result')

        titleSearchResult.innerText = `Resultado da pesquisa: ${inputSearch.value}`

        if(inputSearch.value != ''){
            sectionsContainer.style.display = 'none'
            sectionSearch.style.display = 'block'
        }else{
            sectionsContainer.style.display = 'block'
            sectionSearch.style.display = 'none'
        }
    })
}

setVisibleSection()
search()
getTitle()


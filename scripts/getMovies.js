import useState from './useState.js';

// Variaveis/Constantes
const KEY = 'da4c8a4fb00b774b6b81692089eed935';
const setMovieName = document.getElementById('searchCheck');
const inputSearch = document.getElementById('SearchInput');
const buttonSearch = document.getElementById('ButtonSearch');
const searchReturn = document.getElementById('SearchResult');
const titleSearchResult = document.getElementById('title-search-result');

// Pega o título do filme pelo ID
const getTitle = () => {
  fetch(
    `https://api.themoviedb.org/3/movie/76341?api_key=${KEY}&language=pt-BR`
  )
    .then((res) => res.json())
    .then((data) => {
      // buttonSearch.addEventListener("click", function(){setMovieName.innerText = data.title})
    });
};

// Realizar a pesquisa
const search = () => {
  const boxMovieSearch = document.getElementById('poster-info');

  inputSearch.addEventListener('change', () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${inputSearch.value}&language=pt-BR`
    )
      .then((res) => res.json())
      .then((data) => {
        const arrayResults = data['results'];
        const mapMovies = arrayResults.map(function (movies, index) {
          console.log(movies);
          if (movies.poster_path) {
            const poster = `
            <div id="${index}" class="poster-search">
              <img class="poster" src="https://image.tmdb.org/t/p/original${movies.poster_path}"/>
              <span>${movies.title}</span>
            </div>
            `;
            const verifyNumber = document.querySelectorAll('.poster').length;

            boxMovieSearch.innerHTML += poster;

            for (let i = 20; i == verifyNumber; i++) {
              console.log('Parar aqui');
              boxMovieSearch.innerHTML = '';
            }
          }
        });
      })
      .catch((err) => console.log(`Ocorreu um erro: ${err}`));
  });
};

// Função para ocultar banner e aparecer área de resultados da pesquisa
const setVisibleSection = () => {
  inputSearch.addEventListener('keyup', () => {
    const sectionsContainer = document.getElementById('banner-movie');
    const sectionSearch = document.getElementById('search-result');

    titleSearchResult.innerText = `Resultado da pesquisa: ${inputSearch.value}`;

    if (inputSearch.value != '') {
      sectionsContainer.style.display = 'none';
      sectionSearch.style.display = 'block';
    } else {
      sectionsContainer.style.display = 'block';
      sectionSearch.style.display = 'none';
    }
  });
};

setVisibleSection();
search();
getTitle();

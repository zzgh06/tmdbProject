const apiKey = '94bf32fe5dc29ec64fbf7f4dd361bcbd';
const baseUrl = 'https://api.themoviedb.org/3/movie/top_rated';
const language = 'ko-KR';

async function fetchAllMovies() {
    let allMovies = [];
    let page = 1;
    let totalPages = 1;

    while (page <= totalPages && page <= 100) {
        const response = await fetch(`${baseUrl}?api_key=${apiKey}&language=${language}&page=${page}`);
        const data = await response.json();

        allMovies = allMovies.concat(data.results);
        totalPages = data.total_pages;
        page++;
    }

    return allMovies;
}

document.addEventListener('DOMContentLoaded', () => {
  // 검색어 클리어 버튼에 대한 클릭 이벤트 처리
  document.querySelector('.clear-search').addEventListener('click', clearSearch);

  fetchAllMovies()
      .then(function(allMovies) {
          // 검색 버튼에 대한 클릭 이벤트 처리
          document.querySelector('.search-button').addEventListener('click', () => {
              var userSearch = document.getElementById('user-search').value.trim(); // 사용자 입력 검색어
              handleSearch(userSearch, allMovies);
          });
      })
      .catch(function(error) {
          console.error('Error fetching movie data:', error);
      });
});

// 검색어 클리어 함수
function clearSearch() {
  document.getElementById('user-search').value = ''; // 검색어 입력창 내용을 비움
  document.querySelector('.search-results').innerHTML = ''; // 검색 결과를 비움
  document.querySelectorAll('.wrap').forEach((wrap) => {
      wrap.style.visibility = 'visible'; // rolling 부분을 다시 보이게 함
  });
  document.querySelector('.search-results').style.visibility = 'hidden';
}

// 검색 처리 함수
function handleSearch(userSearch, allMovies) {
  if (userSearch === '') {
      // 검색어가 비어있는 경우 모달 창으로 되돌리기
      document.querySelectorAll('.wrap').forEach((wrap) => {
          wrap.style.visibility = 'visible';
      });
      document.querySelector('.search-results').style.visibility = 'hidden';
  } else {
      // 검색어가 있는 경우 검색 결과를 표시
      var filteredMovies = allMovies.filter((movie) => {
          return movie.title.includes(userSearch);
      });
      displaySearchResults(filteredMovies);
      document.querySelectorAll('.wrap').forEach((wrap) => {
          wrap.style.visibility = 'hidden';
      });
      document.querySelector('.search-results').style.visibility = 'visible';
  }
}


// 검색 결과를 표시하는 함수
function displaySearchResults(movies) {
  var target = document.querySelector('.search-results');
  target.innerHTML = '';

  // 만약 검색어와 일치하는 영화가 없는 경우
  if (movies.length === 0) {
      target.innerHTML = '<h1>죄송합니다. 일치하는 영화가 존재하지 않습니다 😅</h1>';
  } else {
      // 검색어와 일치하는 영화가 있는 경우
      movies.forEach(function(movie) {
          var movieCard = `
              <div class="movie-card">
                  <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} Poster">
                  <h3>${movie.title}</h3>
              </div>
          `;
          target.innerHTML += movieCard;
      });
  }
}
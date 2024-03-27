const apiKey = '94bf32fe5dc29ec64fbf7f4dd361bcbd';
const baseUrl = 'https://api.themoviedb.org/3/movie/top_rated';
const language = 'ko-KR';

async function fetchAllMovies() {
    let allMovies = [];
    let page = 1;
    let totalPages = 1;

    while (page <= totalPages && page <= 150) {
        const response = await fetch(`${baseUrl}?api_key=${apiKey}&language=${language}&page=${page}`);
        const data = await response.json();

        allMovies = allMovies.concat(data.results);
        totalPages = data.total_pages;
        page++;
    }

    return allMovies;
}


$(document).ready(function() {
  // 검색어 클리어 버튼에 대한 클릭 이벤트 처리
  $('.clear-search').click(function() {
      $('#user-search').val(''); // 검색어 입력창 내용을 비움
      $('.search-results').html(''); // 검색 결과를 비움
      $('.wrap').show(); // rolling 부분을 다시 보이게 함
  });

  fetchAllMovies()
    .then(allMovies => {
        $('.search-button').click(function() {
            const userSearch = $('#user-search').val().toLowerCase(); // 사용자 입력 검색어
            const filteredMovies = allMovies.filter(movie => {
                return movie.title.toLowerCase().includes(userSearch);
            });

            if (userSearch === '') {
                // 검색어가 비어있는 경우 모달 창으로 되돌리기
                $('.wrap').show(); // 모달 창 보이기
                $('.search-results').hide(); // 검색 결과 숨기기
            } else {
                // 검색어가 있는 경우 검색 결과를 표시
                displaySearchResults(filteredMovies);
                $('.wrap').hide(); // rolling 부분 숨기기
                $('.search-results').show(); // 검색 결과 보이기
            }
        });

        // 검색어 입력란에서 포커스를 잃을 때 검색 결과를 초기화하여 모달 창으로 되돌림
        $('#user-search').blur(function() {
            const userSearch = $(this).val().trim().toLowerCase();
            if (userSearch === '') {
                $('.wrap').show(); // 모달 창 보이기
                $('.search-results').hide(); // 검색 결과 숨기기
            }
        });
    })
    .catch(error => console.error('Error fetching movie data:', error));

  function displaySearchResults(movies) {
      const $target = $('.search-results');
      $target.html(''); // 영화 목록을 초기화

      // 만약 검색어와 일치하는 영화가 없는 경우
      if (movies.length === 0) {
          $target.append(`<h1>죄송합니다. 일치하는 영화가 존재하지 않습니다 😅</h1>`);
      } else {
          // 검색어와 일치하는 영화가 있는 경우
          movies.forEach(movie => {
              // 검색 결과를 화면에 추가
              let movieCard = `
                  <div class="movie-card">
                      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} Poster">
                      <h3>${movie.title}</h3>
                  </div>
              `;
              $target.append(movieCard);
          });
      }
  }
});

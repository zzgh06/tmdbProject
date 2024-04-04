let alertDisplayed = false;
let num = 1;

function 무한영화데이터() {
  return fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko-kr&page=${num + 1}&sort_by=popularity.desc`, options)
    .then((response) => { 
      return response.json();
    })
    .catch(err => console.error(err));
}

function handleScroll() {
  if (window.innerHeight + window.scrollY + 5 >= document.body.offsetHeight && !alertDisplayed) {
    alertDisplayed = true; // 한 번만 실행되도록 플래그 설정
    무한영화데이터()
      .then(data => {
        무한생성(data.results);
        num++; // 페이지 번호 증가
        alertDisplayed = false; // 플래그 재설정
      })
      .catch(err => console.error(err));
  }
}

function 무한생성(movies) {
  let infiniteMovies = movies.map(data =>
    `<div class="infinite-movie-card">
      <img src="${baseImageUrl + data.poster_path}" alt="">
    </div>`
  );
  document.querySelector('.infinite-movie-list').insertAdjacentHTML('beforeend', infiniteMovies.join(''));
}

window.addEventListener('scroll', handleScroll);
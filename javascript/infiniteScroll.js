let alertDisplayed = false;
let num = 1;

window.addEventListener('scroll', function() {
  // console.log(window.innerHeight)
  // console.log(window.scrollY)
  // console.log(document.body.offsetHeight)
  // console.log(alertDisplayed)
  if (window.innerHeight + window.scrollY + 5 >= document.body.offsetHeight && !alertDisplayed) {
    // alert('다읽음')
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko-kr&page=${num + 1}&sort_by=popularity.desc`, options)
      .then(response => response.json())
      .then(data => {
        movies = data.results.slice(0, 8);
        console.log('영화리스트 : ', movies);
        무한생성(movies);
      })
      .catch(err => console.error(err));
    num += 1;
    if (num === 32) {
      alertDisplayed = true;
    }
  }
});

function 무한생성(movies) {
  let infiniteMovies = movies.map(data =>
    `<div class="infinite-movie-card">
      <img src="${baseImageUrl + data.poster_path}" alt="">
    </div>`
  );
  document.querySelector('.infinite-movie-list').insertAdjacentHTML('beforeend', infiniteMovies.join(''));
}
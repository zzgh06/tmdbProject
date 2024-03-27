const options = {
  method: 'GET', 
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGJmMzJmZTVkYzI5ZWM2NGZiZjdmNGRkMzYxYmNiZCIsInN1YiI6IjYzYzBkZGU5OGVmZTczMDA3ZDhmMGVlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.47-vU7zkWi3yGx8auHD_4LMzCDyLFdWgD7spefzBqdg'
  }
};

const baseImageUrl = 'https://image.tmdb.org/t/p/w500';

// fetch 요청을 Promise로 감싸고 배열에 넣습니다.
const fetchTopMovies = fetch('https://api.themoviedb.org/3/movie/top_rated?language=ko-kr&page=1', options)
  .then(response => response.json())
  .then(data => data.results.slice(0, 10));

const fetchUpcomingMovies = fetch('https://api.themoviedb.org/3/movie/upcoming?language=ko-kr&page=1', options)
  .then(response => response.json())
  .then(data => data.results.slice(0, 10));

const fetchMovies1 = fetch('https://api.themoviedb.org/3/movie/top_rated?language=ko-kr&page=5', options)
  .then(response => response.json())
  .then(data => data.results.slice(0, 16));

const fetchMovies2 = fetch('https://api.themoviedb.org/3/movie/top_rated?language=ko-kr&page=8', options)
  .then(response => response.json())
  .then(data => data.results.slice(0, 16));

// Promise.all()을 사용하여 모든 fetch 요청을 동시에 보내고 결과를 받아옵니다.
Promise.all([fetchTopMovies, fetchUpcomingMovies, fetchMovies1, fetchMovies2])
  .then(([topMovies, upcomingMovies, movies1, movies2]) => {
    // 결과를 이용하여 작업을 수행합니다.
    // console.log('탑 무비 : ', topMovies);
    // console.log('개봉예정 : ', upcomingMovies);
    // console.log('영화리스트 : ', movies1);
    영화생성1(topMovies); 
    영화생성2(upcomingMovies);
    영화생성3(movies1);
    영화생성4(movies1);
    영화생성5(movies2)
  })
  .catch(err => console.error(err));

function 영화생성1(data) {
  let topMovies = data.map(movie => 
    `<div class="top-movie-card">
      <img src="${baseImageUrl + movie.poster_path}" alt="">
    </div>`
  );
  $('.topMovie-list').append(topMovies);
}

function 영화생성2(data) {
  let upcomingMovies = data.map(movie => 
    `<div class="upcoming-movie-card">
      <img src="${baseImageUrl + movie.poster_path}" alt="">
    </div>`
  );
  $('.upcomingMovie-list').append(upcomingMovies);
}

function 영화생성3(data) {
  let infiniteMovies = data.map(movie =>
    `<div class="infinite-movie-card">
      <img src="${baseImageUrl + movie.poster_path}" alt="">
    </div>`
  );
  $('.infinite-movie-list').append(infiniteMovies);
}

function 영화생성4(data) {
  let rollingMovies = data.map(movie =>
    `<div class="rolling-movie-card">
      <img src="${baseImageUrl + movie.poster_path}" alt="">
    </div>`
  );
  $('.rolling-movie-list1').append(rollingMovies);
}

function 영화생성5(data) {
  let rollingMovies = data.map(movie =>
    `<div class="rolling-movie-card">
      <img src="${baseImageUrl + movie.poster_path}" alt="">
    </div>`
  );
  $('.rolling-movie-list2').append(rollingMovies);
}


function setupSlider(nextBtn, prevBtn, movieList) {
  document.querySelector(nextBtn).addEventListener('click', () => {
    document.querySelector(movieList).style.transform = 'translateX(-50%)';
  });
  
  document.querySelector(prevBtn).addEventListener('click', () => {
    document.querySelector(movieList).style.transform = 'translateX(0)';
  });
  
  document.querySelector(movieList).parentElement.addEventListener('mouseover', () => {
    document.querySelector(nextBtn).style.visibility = 'visible';
    document.querySelector(prevBtn).style.visibility = 'visible';
    document.querySelector(nextBtn).style.opacity = '1';
    document.querySelector(prevBtn).style.opacity = '1';
  });
  
  document.querySelector(movieList).parentElement.addEventListener('mouseleave', () => {
    document.querySelector(nextBtn).style.visibility = 'hidden';
    document.querySelector(prevBtn).style.visibility = 'hidden';
    document.querySelector(nextBtn).style.opacity = '0';
    document.querySelector(prevBtn).style.opacity = '0';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupSlider('.top-movies .next', '.top-movies .previous', '.top-movies .topMovie-list');
  setupSlider('.upcoming-movies .next', '.upcoming-movies .previous', '.upcoming-movies .upcomingMovie-list');
});

document.querySelectorAll('.top-movies .next, .top-movies .dot').forEach((element, index) => {
  element.addEventListener('click', () => {
    if (index === 1) {
      console.log(element, index)
      document.querySelectorAll('.dot')[0].classList.add('active');
      document.querySelectorAll('.dot')[1].classList.remove('active');
      document.querySelector('.topMovie-list').style.transform = 'translateX(0)';
    } else {
      document.querySelectorAll('.dot')[1].classList.add('active');
      document.querySelectorAll('.dot')[0].classList.remove('active');
      document.querySelector('.topMovie-list').style.transform = 'translateX(-50%)';
    }
  });
});

document.querySelectorAll('.top-movies .previous').forEach((element, index) => {
  element.addEventListener('click', () => {
    if (index === 1) {
      // console.log(element, index)
      document.querySelectorAll('.dot')[1].classList.add('active');
      document.querySelectorAll('.dot')[0].classList.remove('active');
      document.querySelector('.topMovie-list').style.transform = 'translateX(0)';
    } else {
      // console.log(element, index)
      document.querySelectorAll('.dot')[0].classList.add('active');
      document.querySelectorAll('.dot')[1].classList.remove('active');
      document.querySelector('.topMovie-list').style.transform = 'translateX(-50%)';
    }
  });
});

document.querySelectorAll('.upcoming-movies .next, .upcoming-movies .dot').forEach((element, index) => {
  element.addEventListener('click', () => {
    if (index === 1) {
      document.querySelectorAll('.upcoming-movies .dot')[0].classList.add('active');
      document.querySelectorAll('.upcoming-movies .dot')[1].classList.remove('active');
      document.querySelector('.upcomingMovie-list').style.transform = 'translateX(0)';
    } else {
      document.querySelectorAll('.upcoming-movies .dot')[1].classList.add('active');
      document.querySelectorAll('.upcoming-movies .dot')[0].classList.remove('active');
      document.querySelector('.upcomingMovie-list').style.transform = 'translateX(-50%)';
    }
  });
});

document.querySelectorAll('.upcoming-movies .previous').forEach((element, index) => {
  element.addEventListener('click', () => {
    if (index === 1) {
      // console.log(element, index)
      document.querySelectorAll('.dot')[3].classList.add('active');
      document.querySelectorAll('.dot')[2].classList.remove('active');
      document.querySelector('.upcomingMovie-list').style.transform = 'translateX(0)';
    } else {
      console.log(element, index)
      document.querySelectorAll('.dot')[2].classList.add('active');
      document.querySelectorAll('.dot')[3].classList.remove('active');
      document.querySelector('.upcomingMovie-list').style.transform = 'translateX(-50%)';
    }
  });
});

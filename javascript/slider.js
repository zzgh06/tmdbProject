function setupSlider(nextBtn, prevBtn, movieList) {
    $(nextBtn).on('click', () => {
      $(movieList).css('transform', 'translateX(-88vw)');
    })
    $(prevBtn).on('click', () => {
      $(movieList).css('transform', 'translateX(0)');
    })
    $(movieList).parent().on('mouseover', () => {
      $(nextBtn).css({ 'visibility': 'visible', 'opacity': '1' });
      $(prevBtn).css({ 'visibility': 'visible', 'opacity': '1' });
    })
    $(movieList).parent().on('mouseleave', () => {
      $(nextBtn).css({ 'visibility': 'hidden', 'opacity': '0' });
      $(prevBtn).css({ 'visibility': 'hidden', 'opacity': '0' });
    });
}

$(document).ready(() => {
  setupSlider('.top-movies .next', '.top-movies .previous', '.top-movies .topMovie-list');
  setupSlider('.upcoming-movies .next', '.upcoming-movies .previous', '.upcoming-movies .upcomingMovie-list'); 
});
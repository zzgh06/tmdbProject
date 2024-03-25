function setupSlider(nextBtn, prevBtn, movieList) {
    $(nextBtn).on('click', () => {
      $(movieList).css('transform', 'translateX(-50%)');
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

$('.top-movies .next, .dot:eq(1)').on('click', () => {
  $('.dot:eq(1)').addClass('active');
  $('.dot:eq(0)').removeClass('active');
  $('.topMovie-list').css('transform', 'translateX(-50%)');
});

$('.top-movies .previous, .dot:eq(0)').on('click', () => {
  $('.dot:eq(0)').addClass('active');
  $('.dot:eq(1)').removeClass('active');
  $('.topMovie-list').css('transform', 'translateX(0)');
});

$('.upcoming-movies .next, .upcoming-movies .dot:eq(1)').on('click', () => {
  $('.upcoming-movies .dot:eq(1)').addClass('active');
  $('.upcoming-movies .dot:eq(0)').removeClass('active');
  $('.upcomingMovie-list').css('transform', 'translateX(-50%)');
});

$('.upcoming-movies .previous, .upcoming-movies .dot:eq(0)').on('click', () => {
  $('.upcoming-movies .dot:eq(0)').addClass('active');
  $('.upcoming-movies .dot:eq(1)').removeClass('active');
  $('.upcomingMovie-list').css('transform', 'translateX(0)');
});

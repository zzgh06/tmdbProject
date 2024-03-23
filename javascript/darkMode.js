let cnt = 0;
$('.input').on('click', () => {
  cnt++;
  // console.log(cnt)
  if (cnt % 2 == 1) {
    $('body').addClass('dark-bg');
    $('.nav-bg').css('background-color', '#333333');
  } else {
    $('body').removeClass('dark-bg');
    $('.nav-bg').css('background-color', '#FFFFFF                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ')
  }
})
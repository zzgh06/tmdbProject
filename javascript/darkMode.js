let cnt = 0;
let input = document.querySelector('.input');
input.addEventListener('click', () => {
  cnt++;
  // console.log(cnt)
  if (cnt % 2 === 1) {
    document.body.classList.add('dark-bg');
    document.querySelector('.nav-bg').style.backgroundColor = '#333333';
    document.querySelector('.dropbtn').style.cssText  = 'color: #FFFFFF; background-color: #333333';
  } else {
    document.body.classList.remove('dark-bg');
    document.querySelector('.nav-bg').style.backgroundColor = '#FFFFFF';
    document.querySelector('.dropbtn').style.cssText  = 'color: #333333; background-color: #FFFFFF';
  }
});
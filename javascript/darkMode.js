let darkModeEnabled = false;
const body = document.body;
const navBg = document.querySelector('.nav-bg');
const trailerLink = document.querySelector('.trailer-link');
const dropBtns = document.querySelectorAll('.dropBtn');

document.querySelector('.input').addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
    darkModeEnabled = !darkModeEnabled;
    body.classList.toggle('dark-bg', darkModeEnabled);
    setStyles();
}

function setStyles() {
    if (darkModeEnabled) {
        navBg.style.backgroundColor = '#333333';
        trailerLink.style.cssText = 'color: #FFFFFF; background-color: #333333';
        dropBtns.forEach(dropBtn => {
            dropBtn.style.cssText = 'color: #FFFFFF; background-color: #333333';
        });
    } else {
        navBg.style.backgroundColor = '#FFFFFF';
        trailerLink.style.cssText = 'color: #333333; background-color: #FFFFFF';
        dropBtns.forEach(dropBtn => {
            dropBtn.style.cssText = 'color: #333333; background-color: #FFFFFF';
        });
    }
}
let hamburger = document.getElementById('hamburger');
let menu = document.querySelector('.menu');
let bod = document.querySelector('.navbar');
let icons = document.getElementById('navbarIcons');
hamburger.addEventListener('click', function() {
  icons.style.display = 'flex !important'
  hamburger.classList.toggle('isactive');
  menu.classList.toggle('active');
  if(menu.classList.contains('active')) {
    hamburger.style.position = 'fixed'
  } else {
    hamburger.style.position = 'static'
  }
});


let img = document.getElementById('hamburgerImg');

img.addEventListener('click', function() {
  if(!img.style.transform == 'rotate(20deg)') {
    img.style.transform='rotate(90deg)'
  } else {
    img.style.transform='rotate(0deg)'
  }
})

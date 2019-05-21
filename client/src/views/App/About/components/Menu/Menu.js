let state = 0;
const togglefunction = () => {
  // Toggle "menu--open" 
  // menu.classList.toggle('menu--open') 
  if(state === 0) {
  TweenMax.to('.menu', .5, {right:'-1%'});
  state = 1;
  } else {
  TweenMax.to('.menu', 1, {right:'-40%'})
  state = 0;
  };
  
};

// Reference to .menu Class
const menu = document.querySelector('.menu');

// Reference to .menu-button class
const menuButton = document.querySelector('.menu-button');
// menuButton reference, click handler that calls toggleMenu
menuButton.addEventListener('click', togglefunction);


TweenMax.from('.menu-button', 3, {y:600, rotation:360, scale:0.5});

const allIntroH2 = document.querySelector('.intro h2');

allIntroH2.addEventListener('mouseenter', function(event){
  event.target.style.color ='black';
})

allIntroH2.addEventListener('mouseleave', function(event){
  event.target.style.color ='grey';
})

const allIntroH3 = document.querySelector('.intro h3');

allIntroH3.addEventListener('mouseenter', function(event){
  event.target.style.color ='black';
})

allIntroH3.addEventListener('mouseleave', function(event){
  event.target.style.color ='grey';
})

const allIntroP = document.querySelector('.intro p');

allIntroP.addEventListener('mouseenter', function(event){
  event.target.style.color ='black';
})

allIntroP.addEventListener('mouseleave', function(event){
  event.target.style.color ='grey';
})

const allIntroAboutH2 = document.querySelector('.aboutH2');

allIntroAboutH2.addEventListener('mouseenter', function(event){
  event.target.style.color ='black';
})

allIntroAboutH2.addEventListener('mouseleave', function(event){
  event.target.style.color ='grey';
})

const allIntroAboutArticle = document.querySelector('.aboutArticle');

allIntroAboutArticle.addEventListener('mouseenter', function(event){
  event.target.style.color ='black';
})

allIntroAboutArticle.addEventListener('mouseleave', function(event){
  event.target.style.color ='grey';
})
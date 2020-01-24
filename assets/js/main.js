document.addEventListener("DOMContentLoaded", function(event) {
  /*----------------------------------------------------
  Function botones div contenido desplegables
  ----------------------------------------------------*/
  var btns = document.querySelectorAll(".btn");
  btns.forEach(function (botones) {
    botones.addEventListener("click", filtrarContenido);
  });

  function filtrarContenido() {
    const mainName = this.dataset.name;
    console.log(this);
    const selector = "main-" + mainName;
    //const contenido = document.querySelector("#" + selector);
    const contenido = document.querySelector(`#${selector}`);
    const bodies = document.querySelectorAll('.main-body')
    if(contenido.classList.contains('active')){
      contenido.classList.remove('active')
      anime.remove('#main-inicio h2'),
      anime.remove('#main-inicio p'),
      anime.remove('#main-inicio img')
    } else{
      bodies.forEach((e) =>{
        e.classList.remove('active')
        anime.remove('#main-inicio h2'),
        anime.remove('#main-inicio p'),
        anime.remove('#main-inicio img')
      })
      contenido.classList.add('active')
    }
  }

  /*----------------------------------------------------
  Function Anime JS pantalla inicio
  ----------------------------------------------------*/
  anime.timeline({
    easing:'easeOutExpo',
  })
  .add({
    targets: 'nav .logo-container',
    opacity:[0,1],
    translateY:[20,0],
  }, '500')
  .add({
    targets: 'nav ul li',
    opacity:[0,1],
    translateY:[20,0],
    delay: anime.stagger(200)
  },'600')
  .add({
    targets: '.social-networks a i',
    opacity:[0,1],
    translateY:[20,0],
    delay: anime.stagger(200)
  },'600')
  .add({
    targets: '.title-halo',
    opacity:[0,1],
    translateY:[-100,0],
    duration: 2000,
  }, '500')
  anime({
    targets: '.title-halo svg path, .title-halo svg ellipse, .title-halo svg polygon',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: false,
  }, '1500')
  anime({
    targets: '.title-halo svg',
    fill: '#ffffff',
    transition: 'fill .3s',
    delay: 4600,
  })

  /*----------------------------------------------------
  Function Anime nav mobile
  ----------------------------------------------------*/
  const menuBar = document.querySelector('.menu-bar').addEventListener('click', toggleNav);
  function toggleNav(){
    const navMob = document.querySelector('nav')
    navMob.classList.contains('active') ? navMob.classList.remove('active') : navMob.classList.add('active')
  }
})
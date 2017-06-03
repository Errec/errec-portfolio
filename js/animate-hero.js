var heroAnimation = (function(){
  // Cache the DOM
  var rightHand   = document.getElementById('right-hand');
  var leftHand    = document.getElementById('left-hand');
  var heroSection = document.getElementById('hero');

  var heroYPosition = heroSection.getBoundingClientRect().top + window.scrollY;
  var TH            = false; // _transformHero() flag

  var _getHeroPosition = debounce(function(e){
      heroYPosition = heroSection.getBoundingClientRect().top + window.scrollY;
    }, 200);

  var _transformHero = throttle(function (e) {
    var currentYPosition = window.pageYOffset;
    if(heroYPosition - currentYPosition < 300 && TH === false) {
      TH = true;
      leftHand.className  += " main-hero__left-hand--move";
      rightHand.className += " main-hero__right-hand--move";
    }
  }, 200);

  //  Bind resize window event
  window.addEventListener('resize', _getHeroPosition);

  //  Bind scroll window event
  window.addEventListener('scroll', _transformHero, false);
})();

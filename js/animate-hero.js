var heroAnimation = (function(){
  // Cache the DOM
  var rightHand   = document.getElementById('right-hand');
  var leftHand    = document.getElementById('left-hand');
  var heroSection = document.getElementById('hero');

  var heroYPosition = heroSection.getBoundingClientRect().top + window.scrollY;
  var TH            = false; // _transformHero() flag

  //  Bind resize window event
  window.addEventListener('resize', debounce(_getHeroPosition, 200));
  //  Bind scroll window event
  window.addEventListener('scroll', throttle(_transformHero, 200), false);

  function _getHeroPosition(){
      heroYPosition = heroSection.getBoundingClientRect().top + window.scrollY;
  }

  function _transformHero(){
    var currentYPosition = window.pageYOffset;
    if(heroYPosition - currentYPosition < 300 && TH === false) {
      TH = true;
      leftHand.className  += " main-hero__left-hand--move";
      rightHand.className += " main-hero__right-hand--move";
    }
  }
})();

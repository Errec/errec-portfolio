var heroAnimation = (function(){
  // Cache the DOM
  var rightHand   = document.getElementById('right-hand');
  var leftHand    = document.getElementById('left-hand');
  var heroSection = document.getElementById('hero');

  var heroYPosition = heroSection.getBoundingClientRect().top + window.scrollY;
  var TH            = false; // _transformHero() flag

  //  Bind resize window event
  window.addEventListener('resize', function(e){
    heroYPosition = heroSection.getBoundingClientRect().top + window.scrollY;
  });

  //  Bind scroll window event
  window.addEventListener('scroll', function(e){
    var currentYPosition = window.pageYOffset;
    if(heroYPosition - currentYPosition < 300 && TH === false) {
      _transformHero();
    }
  }, false);

  function _transformHero() {
    TH = true;
    leftHand.className += " main-hero__left-hand--move";
    rightHand.className += " main-hero__right-hand--move";
  }
})();

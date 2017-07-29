var heroAnimation = (function(){
  // Cache the DOM
  var boxWrapper  = document.getElementById('box-wrapper');
  var rightHand   = document.getElementById('right-hand');
  var leftHand    = document.getElementById('left-hand');
  var heroSection = document.getElementById('hero');

  var _transformHero = throttle(function() {
      var currentPosition = ((window.scrollY + window.innerHeight) - heroSection.clientHeight / 1.5);
      if(currentPosition > heroSection.offsetTop) {
        leftHand.className   += " main-hero__left-hand--move";
        rightHand.className  += " main-hero__right-hand--move";
        boxWrapper.className += " hero__box--state-1";
        window.removeEventListener('scroll', _transformHero);
      }
    }, 500);

  //  Bind scroll window event
  window.addEventListener('scroll', _transformHero, false);
})();

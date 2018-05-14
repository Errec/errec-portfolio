var parallaxAboutBg = (function() {
  var parallaxAboutBgImg = document.getElementById('about-parallax-img');
  var about = document.getElementById('about');
  var newTranslate = 0;

  window.addEventListener('scroll', _checkAboutHeight);

  function _checkAboutHeight() {
    var slideInAt = (window.scrollY + window.innerHeight) - about.clientHeight / 2;
    var isHalfShown = slideInAt > about.offsetTop;
    if(isHalfShown) {
      parallaxAboutBgImg.style.transform = "translate3d(0, -100%, 0)";
      window.removeEventListener('scroll', _checkAboutHeight);
    }
  }
})();



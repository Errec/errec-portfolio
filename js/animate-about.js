var parallax = (function() {
  var parallaxImg = document.getElementById('about-parallax-img');
  var about = document.getElementById('about');
  var newTranslate = 0;

  window.addEventListener('scroll', _checkAboutHeight);

  function _checkAboutHeight() {
    var slideInAt = (window.scrollY + window.innerHeight) - about.clientHeight / 2;
    var isTopShow = slideInAt > (about.offsetTop);
    if(isTopShow) {
      percentFromBotttom = 200 *  (slideInAt - about.offsetTop) / about.clientHeight;

      if (newTranslate < percentFromBotttom) {
        newTranslate = percentFromBotttom;
        parallaxImg.style.transform = "translate3d(0,-" + newTranslate +"%,0)";
      }
      newTranslate === 100 ? window.removeEventListener('scroll', _checkAboutHeight) : '';
    }
  }
})();



var parallax = (function() {
  var parallaxImg = document.getElementById('about-parallax-img');
  var about = document.getElementById('about');
  var newTranslate = 0;

  function _checkAboutHeight() {
    var slideInAt = (window.scrollY + window.innerHeight) - about.clientHeight / 2;
    var isTopShow = slideInAt > (about.offsetTop);
    if(isTopShow) {
      percentFromBotttom = 200 *  (slideInAt - about.offsetTop) / about.clientHeight;
      newTranslate = percentFromBotttom;
      parallaxImg.style.transform = "translateY(-" + (newTranslate) + "%)";
    }
  }
   window.addEventListener('scroll', _checkAboutHeight);
})();



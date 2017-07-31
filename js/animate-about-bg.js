var parallax = (function() {
  var about       = document.getElementById('about');
  var parallaxImg = document.getElementById('about-parallax-img');
    // half way through the image
  var slideInAt = (window.scrollY + window.innerHeight) - about.height;
  // bottom of the image
  var imageBottom = about.offsetTop + about.height;
  var isHalfShown = slideInAt > about.offsetTop;

  if(isHalfShown) {
    parallaxImg.style.transform = "translateY(=50%)";
  }
})();

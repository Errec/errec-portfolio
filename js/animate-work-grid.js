var workGridAnimation = (function(){
  // Cache the DOM
  var workItems = document.querySelectorAll('.main-work__item');

  var regClassName = new RegExp('(^| )'+ 'main-work__item--grow' +'($| )','g');

  //  Bind scroll window event
  window.addEventListener('scroll', throttle(_transformWorkGrid, 400), false);

  function _transformWorkGrid(){
    Array.prototype.forEach.call(workItems, function(workItem) {
        // top of the div
      var itemTop = window.scrollY - workItem.offsetTop;
      if (itemTop > -120 & window.innerWidth < 720) {
        workItem.className = workItem.className.replace(regClassName,' ');
      }
    });
  }
})();

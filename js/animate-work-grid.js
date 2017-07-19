var workGridAnimation = (function(){
  // Cache the DOM
  var workItems = document.querySelectorAll('.main-work__item');

  var regClassName   = new RegExp('(^| )'+ 'main-work__item--grow' +'($| )','g');
  var animationCount = 0;

  var _transformWorkGrid = throttle(function() {
      Array.prototype.forEach.call(workItems, function(workItem) {
          // top of the div
        var itemTop = window.scrollY - workItem.offsetTop;
        if (itemTop > -150 & window.innerWidth < 720 && (workItem.className.indexOf('main-work__item--grow') > -1)) {
          _removeGrowClass(workItem);
          if (animationCount >= workItems.length) {
            window.removeEventListener('scroll', _transformWorkGrid);
          }
        }
      });
    }, 200);

  var _removeGrowClass = throttle(function(workItem) {
      workItem.className = workItem.className.replace(regClassName,' ');
      animationCount++;
    }, 1000);

  //  Bind scroll window event
  window.addEventListener('scroll', _transformWorkGrid, false);
})();

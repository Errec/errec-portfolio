var workGridAnimation = (function(){
  // Cache the DOM
  var workItems   = document.getElementsByClassName('main-work__item');
  var workSection = document.getElementById('work');

  var workItemsYPosition = [];
  var regClassName       = new RegExp('(^| )'+ 'main-work__item--grow' +'($| )','g');
  var workYPosition      = workSection.getBoundingClientRect().top + window.scrollY;
  var zeroArr            = new Array(workItems.length+1).join('0').split('').map(parseFloat);
  var TW                 = zeroArr; // transformWorkGrid() flag array

  //  Bind resize window event
  window.addEventListener('resize', debounce(_resetItensSize, 500));
  //  Bind scroll window event
  window.addEventListener('scroll', throttle(_transformWorkGrid, 100), false);

  function _resetItensSize(){
    workYPosition = workSection.getBoundingClientRect().top + window.scrollY;
    if (window.innerWidth < 720 && (TW.reduce(_add, 0)) !== 0) {
      TW = new Array(workItems.length+1).join('0').split('').map(parseFloat);
      var gridItem = document.getElementsByClassName("main-work__item");
      for(var i = 0; i < gridItem.length; i++) {
        gridItem[i].className = gridItem[i].className.replace(regClassName,' ');
      }
    }
  }

  function _transformWorkGrid(){
    var currentYPosition = window.pageYOffset;
    if (window.innerWidth < 720 && workYPosition - currentYPosition < 50 && (TW.reduce(_add, 0)) < 5) {
      workItemsYPosition = Array.from(workItems).map(function(entry) {
        return Math.abs(document.getElementById(entry.id).getBoundingClientRect().top + window.scrollY - currentYPosition);
      }); // Arr with abs values of the distance between every grid item from the top of the window
      var min = Math.min.apply(null, workItemsYPosition);
      var divSufix = workItemsYPosition.indexOf(min);
      var topGridItemID = 'wli-' + divSufix;
      if (TW[divSufix] !== 1) {
        document.getElementById(topGridItemID).className += " main-work__item--grow";
        TW[divSufix] = 1;
      }
    }
  }

  function _add(a, b) {
      return a + b;
  }
})();

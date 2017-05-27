var workGridAnimation = (function(){
  // Cache the DOM
  var workItems          = document.getElementsByClassName('main-work__item');
  var workSection        = document.getElementById('work');

  var workItemsYPosition = [];
  var workYPosition      = workSection.getBoundingClientRect().top + window.scrollY;
  var zeroArr            = new Array(workItems.length+1).join('0').split('').map(parseFloat);
  var TW                 = zeroArr; // transformWorkGrid() flag array

  //  Bind resize window event
  window.addEventListener('resize', function(e){
    workYPosition = workSection.getBoundingClientRect().top + window.scrollY;
    if (window.innerWidth < 720 && (TW.reduce(_add, 0)) !== 0) {
      TW = new Array(workItems.length+1).join('0').split('').map(parseFloat);
      var gridItem = document.getElementsByClassName("main-work__item");
      for(var i = 0; i < gridItem.length; i++) {
       gridItem[i].style.height = '8vh';
       gridItem[i].style.filter = 'grayscale(1)';
      }
    }
  });

  //  Bind scroll window event
  window.addEventListener('scroll', function(e){
    var currentYPosition = window.pageYOffset;
    if (window.innerWidth < 720 && workYPosition - currentYPosition < 50 && (TW.reduce(_add, 0)) < 5) {
      _transformWorkGrid(currentYPosition);
    }
  }, false);

  function _transformWorkGrid(currentYPosition) {
    workItemsYPosition = Array.from(workItems).map(function(entry) {
      return Math.abs(document.getElementById(entry.id).getBoundingClientRect().top + window.scrollY - currentYPosition);
    }); // Arr with abs values of the distance between every grid item from the top of the window
    var min = Math.min.apply(null, workItemsYPosition);
    var divSufix = workItemsYPosition.indexOf(min);
    var topGridItemID = 'wli-' + divSufix;
    document.getElementById(topGridItemID).style.height = '30vh';
    document.getElementById(topGridItemID).style.filter = 'none';
    TW[divSufix] = 1;
  }

  function _add(a, b) {
      return a + b;
  }
})();

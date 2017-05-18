var workItems          = document.getElementsByClassName('main-work__item');
var workSection        = document.getElementById('work');
var workYPosition      = workSection.getBoundingClientRect().top + window.scrollY;
var workItemsYPosition = [];
var TW                 = [0, 0, 0, 0, 0]; // transformWorkGrid() flag

window.addEventListener('resize', function(e){
  workYPosition = workSection.getBoundingClientRect().top + window.scrollY;
  if (window.innerWidth < 720 && (TW.reduce(add, 0)) !== 0) {
    TW = [0, 0, 0, 0, 0];
    var gridItem = document.getElementsByClassName("main-work__item");
    for(var i = 0; i < gridItem.length; i++) {
     gridItem[i].style.height = '8vh';
     gridItem[i].style.filter = 'grayscale(1)';
    }
  }
});

window.addEventListener('scroll', function(e){
  var currentYPosition = window.pageYOffset;

  if (window.innerWidth < 720 && workYPosition - currentYPosition < 50 && (TW.reduce(add, 0)) < 5) {
    transformWorkGrid(currentYPosition);
  }
}, false);

function transformWorkGrid(currentYPosition) {
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

function add(a, b) {
    return a + b;
}

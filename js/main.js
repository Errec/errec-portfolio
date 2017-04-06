var skillIcons         = document.getElementsByClassName("main-skills__svg");
var workItems          = document.getElementsByClassName('main-work__item');
var rightHand          = document.getElementById('right-hand');
var leftHand           = document.getElementById('left-hand');
var heroSection        = document.getElementById('hero');
var workSection        = document.getElementById('work');
var heroYPosition      = heroSection.getBoundingClientRect().top + window.scrollY;
var workYPosition      = workSection.getBoundingClientRect().top + window.scrollY;
var workItemsYPosition = [];
var TH                 = false; // transformHero() flag
var TW                 = [0, 0, 0, 0, 0]; // transformWorkGrid() flag

for (var i = 0; i < skillIcons.length; i++) {
  skillIcons[i].onmouseover = function(e) {
    this.children[0].classList.remove("main-skills__svg--fill");
};
  skillIcons[i].onmouseout = function(e) {
    this.children[0].classList.add("main-skills__svg--fill");
};
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

window.addEventListener('resize', function(e){
  heroYPosition = heroSection.getBoundingClientRect().top + window.scrollY;
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

  if(heroYPosition - currentYPosition < 200 && TH === false) {
    transformHero();
  }
  if (window.innerWidth < 720 && workYPosition - currentYPosition < 50 && (TW.reduce(add, 0)) < 5) {
    transformWorkGrid(currentYPosition);
  }
}, false);

function transformHero() {
  TH = true;
  rightHand.style.transform   = 'rotate(-1deg)';
  rightHand.style.marginTop   = '-7%';
  rightHand.style.marginRight = '-2%';
  leftHand.style.transform    = 'rotate(-15deg)';
  leftHand.style.marginTop    = '-2%';
  leftHand.style.marginLeft   = '-2%';
}

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

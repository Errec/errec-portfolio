var skillIcons  = document.getElementsByClassName("main-skills__svg");
var workItems   = document.getElementsByClassName('main-work__item');
var rightHand   = document.getElementById('right-hand');
var leftHand    = document.getElementById('left-hand');
var heroSection = document.getElementById('hero');
var workSection = document.getElementById('work');
var heroYPosition  = heroSection.getBoundingClientRect().top + window.scrollY;
var workYPosition  = workSection.getBoundingClientRect().top + window.scrollY;
var workItemsYPosition = [];
var TH          = false; // transformHero() flag

checkWorkItemsYPosition();

for (var i = 0; i < skillIcons.length; i++) {
  skillIcons[i].onmouseover = function(e) {
    this.children[0].classList.remove("main-skills__svg--fill");
};
  skillIcons[i].onmouseout = function(e) {
    this.children[0].classList.add("main-skills__svg--fill");
};
}

window.addEventListener('resize', function(e){
  heroYPosition = heroSection.getBoundingClientRect().top + window.scrollY;
  workYPosition = workSection.getBoundingClientRect().top + window.scrollY;
  checkWorkItemsYPosition();
});

window.addEventListener('scroll', function(e){
  var currentYPosition = window.pageYOffset;

  if(heroYPosition - currentYPosition < 200 && TH === false) {
    transformHero();
  }
  if (window.innerWidth < 720 && workYPosition - currentYPosition < 0) {
    transformWorkGrid();
  }
}, false);

function transformHero() {
  TH = true;
  rightHand.style.transform = 'rotate(-1deg)';
  rightHand.style.marginTop = '-7%';
  rightHand.style.marginRight = '-2%';
  leftHand.style.transform = 'rotate(-15deg)';
  leftHand.style.marginTop = '-2%';
  leftHand.style.marginLeft = '-2%';
}

function transformWorkGrid() {
  // itemsYPositionFromTop[0] = workSection.getBoundingClientRect().top + window.scrollY;
}

function checkWorkItemsYPosition() {
  workItemsYPosition = Array.from(workItems).map(function(entry) {
    return document.getElementById(entry.id).getBoundingClientRect().top + window.scrollY;
  });
}

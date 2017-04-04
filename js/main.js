var skillIcons  = document.getElementsByClassName("main-skills__svg");
var rightHand   = document.getElementById('right-hand');
var leftHand    = document.getElementById('left-hand');
var heroSection = document.getElementById('hero');
var workSection = document.getElementById('work');
var heroHeight  = heroSection.getBoundingClientRect().top + window.scrollY;
var workHeight  = workSection.getBoundingClientRect().top + window.scrollY;
var TH          = false; // transformHero() flag

for (var i = 0; i < skillIcons.length; i++) {
  skillIcons[i].onmouseover = function(e) {
    this.children[0].classList.remove("main-skills__svg--fill");
};
  skillIcons[i].onmouseout = function(e) {
    this.children[0].classList.add("main-skills__svg--fill");
};
}

window.addEventListener('resize', function(e){
  heroHeight = heroSection.getBoundingClientRect().top + window.scrollY;
  workHeight = workSection.getBoundingClientRect().top + window.scrollY;
});

window.addEventListener('scroll', function(e){
  var currentHeight     = window.pageYOffset;

  if(heroHeight - currentHeight < 200 && TH === false) {
    transformHero();
  }
  if (window.innerWidth < 720 && workHeight - currentHeight < 0) {
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
/*  var workGrid = document.getElementsByClassName('main-work__item');
  itemsHeightFromTop[0] = workSection.getBoundingClientRect().top + window.scrollY;*/
}

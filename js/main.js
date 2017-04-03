var skillIcons = document.getElementsByClassName("main-skills__svg");
var rightHand  = document.getElementById('right-hand');
var leftHand   = document.getElementById('left-hand');
var TH = false; // transformHero() flag

for (var i = 0; i < skillIcons.length; i++) {
  skillIcons[i].onmouseover = function(e) {
    this.children[0].classList.remove("main-skills__svg--fill");
};
  skillIcons[i].onmouseout = function(e) {
    this.children[0].classList.add("main-skills__svg--fill");
};
}

window.addEventListener('scroll', function(e){
  var height     = window.pageYOffset;
  if( height > 450 && height < 500 && TH === false) {
    transformHero();
  }
    // console.log(window.pageYOffset);
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

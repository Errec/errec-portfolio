var skillIcons = document.getElementsByClassName("main-skills__svg");

for (var i = 0; i < skillIcons.length; i++) {
  skillIcons[i].onmouseover = function(e) {
    this.children[0].classList.remove("main-skills__svg--fill");
};
  skillIcons[i].onmouseout = function(e) {
    this.children[0].classList.add("main-skills__svg--fill");
};
}

window.addEventListener('scroll', function(e){
  rightHand = document.getElementById('right-hand');
  pageHeight = window.pageYOffset;
  if( pageHeight > 350 && pageHeight < 400) {
    rightHand.style.transform = 'rotate(-1deg)';
    rightHand.style.marginTop = '-15%';
    rightHand.style.marginRight = '-6%';
    console.log(window.pageYOffset);
    console.log(rightHand.style);
  }
}, false);

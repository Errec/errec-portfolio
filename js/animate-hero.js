var rightHand          = document.getElementById('right-hand');
var leftHand           = document.getElementById('left-hand');
var heroSection        = document.getElementById('hero');
var heroYPosition      = heroSection.getBoundingClientRect().top + window.scrollY;
var TH                 = false; // transformHero() flag

window.addEventListener('resize', function(e){
  heroYPosition = heroSection.getBoundingClientRect().top + window.scrollY;
});

window.addEventListener('scroll', function(e){
  var currentYPosition = window.pageYOffset;
  if(heroYPosition - currentYPosition < 300 && TH === false) {
    transformHero();
  }
}, false);

function transformHero() {
  TH = true;
  leftHand.style.transform    = 'rotate(-5deg)';
  leftHand.style.marginTop    = '-4%';
  leftHand.style.marginLeft   = '-2%';
  rightHand.style.transform   = 'rotate(5deg)';
  rightHand.style.marginTop   = '-7%';
  rightHand.style.marginRight = '-6%';
}

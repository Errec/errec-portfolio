var skillIcons = document.getElementsByClassName("main-skills__svg");

for (var i = 0; i < skillIcons.length; i++) {
  skillIcons[i].onmouseover = function(e) {
    this.children[0].classList.remove("main-skills__svg--fill");
};
  skillIcons[i].onmouseout = function(e) {
    this.children[0].classList.add("main-skills__svg--fill");
};
}

var skillIcons = document.getElementsByClassName("main-skills__svg--fill");

for (var i = 0; i < skillIcons.length; i++) {
  skillIcons[i].onmouseover = function(e) {
    console.log(this.children);
    this.classList.remove("main-skills__svg--fill");
};
  skillIcons[i].onmouseout = function(e) {
    this.classList.add("main-skills__svg--fill");
};
}

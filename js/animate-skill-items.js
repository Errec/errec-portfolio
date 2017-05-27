var svgHover = (function(){
  // Cache the DOM
  var svgUl = document.querySelector("#skills-grid");
  //  Bind mouse events
  svgUl.addEventListener("mouseover", _showColor, false);
  svgUl.addEventListener("mouseout", _removeColor, false);

  function _showColor(e) {
    if(e.target !== e.currentTarget) {
      e.target.classList.remove("main-skills__svg--fill");
    }
    e.stopPropagation();
  }

  function _removeColor(e) {
    if(e.target !== e.currentTarget) {
      e.target.classList.add("main-skills__svg--fill");
    }
    e.stopPropagation();
  }
})();

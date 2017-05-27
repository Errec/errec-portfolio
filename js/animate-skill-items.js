var svgHover = (function(){
  // Cache the DOM
  var svgUl = document.querySelector("#skills-grid");

  var regClassName = new RegExp('(^| )'+ 'main-skills__svg--fill' +'($| )','g');

  //  Bind mouse events
  svgUl.addEventListener("mouseover", _showColor, false);
  svgUl.addEventListener("mouseout", _removeColor, false);

  function _showColor(e) {
    if(e.target !== e.currentTarget) {
      e.target.className.baseVal = e.target.className.baseVal.replace(regClassName,' ');
    }
    e.stopPropagation();
  }

  function _removeColor(e) {
    if(e.target !== e.currentTarget) {
      e.target.className.baseVal += " main-skills__svg--fill";
    }
    e.stopPropagation();
  }
})();

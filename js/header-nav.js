var scroolToSections = (function() {
  var skillsLink = document.querySelector('.header__link-skills');
  var workLink   = document.querySelector('.header__link-work');
  var aboutLink  = document.querySelector('.header__link-about');

  var skillsDiv = document.querySelector('.main-skills');
  var workDiv   = document.querySelector('.main-work');
  var aboutDiv  = document.querySelector('.main-about');

  skillsLink.addEventListener('click', _scrollIntoSkills);
  workLink.addEventListener('click', _scrollIntoWork);
  aboutLink.addEventListener('click', _scrollIntoAbout);

  function _scrollIntoSkills() {
    skillsDiv.scrollIntoView({ behavior: 'smooth' });
  }
  function _scrollIntoWork() {
    workDiv.scrollIntoView({ behavior: 'smooth' });
  }
  function _scrollIntoAbout() {
    aboutDiv.scrollIntoView({ behavior: 'smooth' });
  }
})();

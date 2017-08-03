var checkForm = (function () {
  message  = document.getElementById("input-message");
  email    = document.getElementById("input-email");
  inputBtn = document.getElementById("input-btn");
  form     = document.getElementById("about-form");

  inputBtn.addEventListener('click', _checkEmpty);

  function _checkEmpty() {
    if (email.value === "" || message.value === "") {
      alert("Cant submit empty email/message");
    } else {
      form.submit();
    }
  }
})();

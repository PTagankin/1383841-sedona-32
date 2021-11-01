function myFunction() {
    var element = document.getElementById("myDIV");
    element.className = element.className.replace(/\bmystyle\b/g, "");
  }

  function modalClose() {
    var element = document.getElementById("myDIV");
    element.classList.add("mystyle");
  }

  function popupOpen() {
    var element = document.getElementById("pop-up");
    element.className = element.className.replace(/\bpopover-disable\b/g, "");
  }

  function popupClose() {
    var element = document.getElementById("pop-up");
    element.classList.add("popover-close");
  }
// Wires up every .theme-toggle button on the page.
// Dark is the default appearance; picking "light" is remembered
// in localStorage and re-applied instantly on the next page load
// (see the inline snippet in <head> that runs before this file).
document.addEventListener("DOMContentLoaded", function () {
  var root = document.documentElement;
  var buttons = document.querySelectorAll(".theme-toggle");

  function currentTheme() {
    return root.getAttribute("data-theme") === "light" ? "light" : "dark";
  }

  function label(btn, theme) {
    btn.querySelector(".label").textContent =
      theme === "light" ? "Switch to dark" : "Switch to light";
  }

  buttons.forEach(function (btn) {
    label(btn, currentTheme());
    btn.addEventListener("click", function () {
      var next = currentTheme() === "light" ? "dark" : "light";
      if (next === "light") {
        root.setAttribute("data-theme", "light");
      } else {
        root.removeAttribute("data-theme");
      }
      try { localStorage.setItem("theme", next); } catch (e) {}
      buttons.forEach(function (b) { label(b, next); });
    });
  });
});

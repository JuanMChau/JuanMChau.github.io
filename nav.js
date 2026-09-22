// Mobile slide-in sidebar. Below the 780px breakpoint the sidebar is
// fixed off-screen; this opens/closes it via the menu button, a
// backdrop tap, or a swipe gesture from the left edge.
document.addEventListener("DOMContentLoaded", function () {
  var sidebar = document.getElementById("sidebar");
  var toggle = document.getElementById("menu-toggle");
  var backdrop = document.getElementById("sidebar-backdrop");
  if (!sidebar || !toggle || !backdrop) return;

  function isMobile() {
    return window.matchMedia("(max-width: 780px)").matches;
  }

  function openDrawer() {
    sidebar.classList.add("open");
    toggle.classList.add("open");
    backdrop.classList.add("visible");
    toggle.setAttribute("aria-expanded", "true");
  }

  function closeDrawer() {
    sidebar.classList.remove("open");
    toggle.classList.remove("open");
    backdrop.classList.remove("visible");
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", function () {
    if (sidebar.classList.contains("open")) closeDrawer();
    else openDrawer();
  });
  backdrop.addEventListener("click", closeDrawer);

  // Close automatically if the viewport grows past the breakpoint
  // (e.g. rotating a tablet) so the panel doesn't get stuck open.
  window.addEventListener("resize", function () {
    if (!isMobile()) closeDrawer();
  });

  // Edge-swipe: start near the left edge and drag right to open;
  // swipe left anywhere on the open panel to close.
  var touchStartX = null;
  var touchStartY = null;
  var EDGE_ZONE = 24;      // px from the left edge that counts as "the edge"
  var SWIPE_THRESHOLD = 60; // px of horizontal movement to trigger

  document.addEventListener("touchstart", function (e) {
    if (!isMobile()) return;
    var t = e.touches[0];
    touchStartX = t.clientX;
    touchStartY = t.clientY;
  }, { passive: true });

  document.addEventListener("touchend", function (e) {
    if (!isMobile() || touchStartX === null) return;
    var t = e.changedTouches[0];
    var dx = t.clientX - touchStartX;
    var dy = t.clientY - touchStartY;

    // Ignore mostly-vertical gestures (scrolling).
    if (Math.abs(dy) > Math.abs(dx)) { touchStartX = null; return; }

    var isOpen = sidebar.classList.contains("open");

    if (!isOpen && touchStartX <= EDGE_ZONE && dx > SWIPE_THRESHOLD) {
      openDrawer();
    } else if (isOpen && dx < -SWIPE_THRESHOLD) {
      closeDrawer();
    }
    touchStartX = null;
  }, { passive: true });
});

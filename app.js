// Toggle popup visibility
function togglePopup() {
  const popup = document.getElementById("filterPopup");
  popup.classList.toggle("hidden");
}

// Optional: close popup when clicking outside
window.addEventListener("click", function (e) {
  const button = document.getElementById("filterButton");
  const popup = document.getElementById("filterPopup");

  if (!button.contains(e.target) && !popup.contains(e.target)) {
    popup.classList.add("hidden");
  }
});

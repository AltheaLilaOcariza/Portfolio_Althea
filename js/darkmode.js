document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("theme-toggle");

  // Apply saved theme on page load
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode-theme");
    if (toggle) toggle.checked = true;
  }

  // Only add event listener if toggle exists
  if (toggle) {
    toggle.addEventListener("change", () => {
      document.body.classList.toggle("dark-mode-theme");

      // Save preference
      if (document.body.classList.contains("dark-mode-theme")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  }
});

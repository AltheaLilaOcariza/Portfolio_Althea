document.addEventListener("DOMContentLoaded", function () {
  const themeBtn = document.querySelector(".switch");

  // Apply saved theme on page load
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode-theme");
    if (themeBtn) themeBtn.classList.add("is-active");
  }

  // Toggle dark/light mode on button click
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      themeBtn.classList.toggle("is-active");
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

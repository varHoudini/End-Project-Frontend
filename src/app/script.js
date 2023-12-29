document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach((dropdown) => {
      const btn = dropdown.querySelector(".dropbtn");
      const content = dropdown.querySelector(".dropdown-content");

      btn.addEventListener("click", function () {
        content.style.display = (content.style.display === "block") ? "none" : "block";
      });

      document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target)) {
          content.style.display = "none";
        }
      });
    });
  });
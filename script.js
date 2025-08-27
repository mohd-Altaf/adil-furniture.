const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector("nav ul");

    toggle.addEventListener("click", () => {
      menu.classList.toggle("show");
      toggle.textContent = menu.classList.contains("show") ? "✖" : "☰";
    });
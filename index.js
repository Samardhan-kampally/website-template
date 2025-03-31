function loadPage(page) {
  fetch(page)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("content").innerHTML = data;
      document.documentElement.scrollTop = 0;
    })
    .catch((error) => console.error("Error loading page:", error));
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your message! We will get back to you soon.");
  this.reset();
});

document.getElementById("phone").addEventListener("input", function () {
  let phoneInput = this.value.replace(/\D/g, "");

  if (phoneInput.length > 10) {
    phoneInput = phoneInput.slice(0, 10);
  }

  this.value = phoneInput;
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const body = document.querySelector("body");

  // Toggle menu
  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    navLinks.classList.toggle("active");
  });

  // Close menu when clicking a link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
      navLinks.classList.remove("active");
    }
  });

  // Close menu on scroll
  window.addEventListener("scroll", () => {
    navLinks.classList.remove("active");
  });
});

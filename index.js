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


  // Scroll Button
const btn = document.getElementById("scrollTopBtn");
window.onscroll = () => {
  btn.style.display = window.scrollY > 200 ? "block" : "none";
};
btn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// Contact Form Validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const msg = document.getElementById("formMsg");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        msg.textContent = "Please fill all fields.";
        msg.style.color = "red";
        return;
      }

      const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
      if (!pattern.test(email)) {
        msg.textContent = "Invalid email address.";
        msg.style.color = "red";
        return;
      }

      msg.textContent = "Message sent successfully!";
      msg.style.color = "green";
      form.reset();
    });
  }
});

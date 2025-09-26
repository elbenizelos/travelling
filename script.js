// Scroll reveal effect
const onScrollReveal = () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
};
window.addEventListener("scroll", onScrollReveal);
window.addEventListener("load", onScrollReveal);

// Contact form handler
const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("Form submitted:", { name, email, message });
    alert("Thanks for contacting us! We'll reply soon.");
    form.reset();
  });
}

// ✅ Fix hero height for older mobile browsers
function fixHeroHeight() {
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.height = window.innerHeight + "px";
  }
}
window.addEventListener("resize", fixHeroHeight);
window.addEventListener("load", fixHeroHeight);

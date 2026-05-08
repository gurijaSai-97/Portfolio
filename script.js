// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
toggle?.addEventListener('click', () => links.classList.toggle('open'));
links?.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => links.classList.remove('open'))
);

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = 1;
      e.target.style.transform = 'translateY(0)';
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.post, .work, .hero-text, .hero-img').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity .7s ease, transform .7s ease';
  io.observe(el);
});
function toggleSkills() {
  const hiddenSkills = document.querySelectorAll(".hidden-skill");
  const button = document.querySelector(".show less");

  hiddenSkills.forEach(skill => {
    skill.style.display =
      skill.style.display === "block" ? "none" : "block";
  });

  button.textContent =
    button.textContent === "View all" ? "Show less" : "View all";
}
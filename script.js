// Welcome message
document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to the CRISP-DM website!");
});

// Highlight active navigation link
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Footer year auto update
const footer = document.querySelector("footer p");
const currentYear = new Date().getFullYear();
footer.innerHTML = `© ${currentYear} IMC11203 INTRODUCTION TO COMPUTING & DATA SCIENCE (ASSIGNMENT 1)`;


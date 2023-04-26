/* Mobile Nav-section */
const navLinks = document.querySelector(".nav-links");
const dimBkg = document.querySelector(".bkg-dim");
const closeBtn = document.getElementById("close-nav-btn");
const hamburger = document.getElementById("hamburger");


hamburger.addEventListener("click", () => {
  navLinks.style.transform = "translateY(0)";
});

closeBtn.addEventListener("click", () => {
  navLinks.style.transform = "";
});

/* Mobile Nav-section */
const navContainer = document.querySelector(".nav-links");
const dimBkg = document.querySelector(".bkg-dim");
const closeBtn = document.getElementById("close-nav-btn");
const hamburger = document.getElementById("hamburger");
const links = document.querySelectorAll('.nav-links li')


hamburger.addEventListener("click", () => {
  navContainer.style.transform = "translateY(0)";
});

closeBtn.addEventListener("click", () => {
  navContainer.style.transform = "";
});

links.forEach((e) => {
  e.addEventListener('click', (link) => {
    navContainer.style.transform = "";
  })
})
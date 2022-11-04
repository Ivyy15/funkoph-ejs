const navLinks = document.querySelectorAll("nav a.nav-link"),
  url = window.location.href;

if (url.includes("featured")) {
  navLinks[1].classList.add("active");

} else if (url.includes("branches")) {
  navLinks[2].classList.add("active");

} else {
  navLinks[0].classList.add("active");
}


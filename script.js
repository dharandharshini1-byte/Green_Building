// Scroll Animation

const fadeElements = document.querySelectorAll(".fade-up");

const showOnScroll = () => {
  fadeElements.forEach((element) => {
    const position = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight - 100;

    if (position < screenPosition) {
      element.classList.add("active");
    }
  });
};

window.addEventListener("scroll", showOnScroll);

showOnScroll();

// Navbar Background on Scroll

const navbar = document.querySelector(".custom-navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.padding = "10px 0";
    navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.08)";
  } else {
    navbar.style.padding = "15px 0";
    navbar.style.boxShadow = "none";
  }
});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
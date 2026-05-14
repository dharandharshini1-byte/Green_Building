// Loader
window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
});

// AOS
AOS.init({
    duration: 1000
});

// Navbar Scroll
window.addEventListener("scroll", function () {

    let navbar = document.querySelector(".custom-navbar");

    navbar.classList.toggle("scrolled", window.scrollY > 50);

});

// Counter Animation
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

    counter.innerText = '0';

    const updateCounter = () => {

        const target = +counter.getAttribute('data-target');

        const c = +counter.innerText;

        const increment = target / 100;

        if (c < target) {

            counter.innerText = `${Math.ceil(c + increment)}`;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }
    };

    updateCounter();
});

// Scroll Top Button
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Message Sent Successfully!");

});

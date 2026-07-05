// Dark Mode
const darkBtn = document.getElementById("darkMode");

if (darkBtn) {
    darkBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        const icon = darkBtn.querySelector("i");

        if (document.body.classList.contains("dark")) {
            icon.classList.remove("bi-moon-fill");
            icon.classList.add("bi-sun-fill");
            localStorage.setItem("theme", "dark");
        } else {
            icon.classList.remove("bi-sun-fill");
            icon.classList.add("bi-moon-fill");
            localStorage.setItem("theme", "light");
        }
    });

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");

        const icon = darkBtn.querySelector("i");
        icon.classList.remove("bi-moon-fill");
        icon.classList.add("bi-sun-fill");
    }
}

// ===============================
// Back To Top
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
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

// ===============================
// Navbar Shadow
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,.15)";
    } else {
        navbar.style.boxShadow = "none";
    }

});

// ===============================
// Scroll Animation
// ===============================

const elements = document.querySelectorAll(
    ".course-card,.category-card,.review-card,.pricing-card,.featured,.learning-progress"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: .2
});

elements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = ".7s";

    observer.observe(el);

});

// ===============================
// Progress Animation
// ===============================

const progressBars = document.querySelectorAll(".progress-bar");

progressBars.forEach(bar => {

    const width = bar.style.width;

    bar.style.width = "0";

    setTimeout(() => {

        bar.style.width = width;

    }, 500);

});

// ===============================
// Counter Animation
// ===============================

const counters = document.querySelectorAll(".hero-info h3");

const speed = 80;

counters.forEach(counter => {

    const updateCounter = () => {

        const target = counter.innerText;

        const value = parseInt(target.replace(/\D/g, ""));

        let count = 0;

        const interval = setInterval(() => {

            count++;

            if (count >= value) {

                counter.innerText = target;
                clearInterval(interval);

            } else {

                if (target.includes("K")) {
                    counter.innerText = count + "K+";
                } else if (target.includes("★")) {
                    counter.innerText = count + "★";
                } else {
                    counter.innerText = count + "+";
                }

            }

        }, speed);

    };

    updateCounter();

});

// ===============================
// Buttons Hover Effect
// ===============================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-3px)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0)";

    });

});

// ===============================
// signup
// ===============================

const emailInput = document.querySelector(".signUp input");
const subscribeBtn = document.querySelector(".signUp button");

if (subscribeBtn) {

    subscribeBtn.addEventListener("click", () => {

        if (emailInput.value.trim() === "") {

            alert("Please enter your email.");

        } else {

            alert("Subscribed Successfully 🎉");
            document.querySelectorAll(".signUp input").forEach(input => {
            input.value = "";
            });
        }

    });

}

console.log("EduMaster Loaded Successfully 🚀");


// ===============================
// FAQ
// ===============================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if (faq !== item) {
                faq.classList.remove("active");
            }

        });

        item.classList.toggle("active");

    });

});
// ===============================
// Course Slider
// ===============================

const courseSlider = document.querySelector(".course-slider");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

if (courseSlider && nextBtn && prevBtn) {

    const scrollAmount = 390;

    nextBtn.addEventListener("click", () => {

        courseSlider.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });

    });

    prevBtn.addEventListener("click", () => {

        courseSlider.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        });

    });

}
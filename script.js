
// NAVBAR SCROLL EFFECT

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 30);
});


// MENU FILTER

const filterButtons = document.querySelectorAll(".filter-btn");
const menuItems = document.querySelectorAll(".menu-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const category = button.dataset.filter;

        menuItems.forEach(item => {

            if (
                category === "all" ||
                item.dataset.category === category
            ) {
                item.classList.remove("hide");
            } else {
                item.classList.add("hide");
            }

        });

    });

});


// BACK TO TOP BUTTON

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    topBtn.classList.toggle("show", window.scrollY > 400);

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// FOOTER YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();


// IMAGE FALLBACK

// If an online photo fails, show a visible fallback
// instead of leaving a broken image icon.

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("error", function () {

        if (this.dataset.fallbackUsed) return;

        this.dataset.fallbackUsed = "true";

        this.src =
            "https://placehold.co/900x600/263b2d/ffffff?text=We+Chai";

    });

});


// BACKGROUND VIDEO AUTOPLAY ATTEMPT

document.querySelectorAll("video").forEach(video => {

    video.muted = true;

    video.play().catch(() => {
        // Some browsers may block autoplay.
        // The video can still be played manually.
        console.log("Video autoplay was blocked by browser.");
    });

});

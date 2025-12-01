document.addEventListener("DOMContentLoaded", () => {

    const leftBtns = document.querySelectorAll(".left-btn");
    const rightBtns = document.querySelectorAll(".right-btn");

    leftBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const scrollBox = btn.parentElement.querySelector(".img-container");
            scrollBox.scrollBy({ left: -300, behavior: "smooth" });
        });
    });

    rightBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const scrollBox = btn.parentElement.querySelector(".img-container");
            scrollBox.scrollBy({ left: 300, behavior: "smooth" });
        });
    });

    // Hide buttons if there is only 1 image
    const sliders = document.querySelectorAll(".slider-wrapper");

    sliders.forEach(slider => {
        const images = slider.querySelectorAll(".img-container img");
        const leftBtn = slider.querySelector(".left-btn");
        const rightBtn = slider.querySelector(".right-btn");

        if (images.length <= 2) {
            leftBtn.style.display = "none";
            rightBtn.style.display = "none";
        }
    });

});

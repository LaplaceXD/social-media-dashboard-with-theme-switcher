document.addEventListener("DOMContentLoaded", function () {
    const fadeInElements = document.querySelectorAll(".fade-in");
    const floatInElements = document.querySelectorAll(".float-in");

    let fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0)
                entry.target.style.animation = `fade-in 1s ease-in-out forwards`;
        });
    });

    let floatInObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0)
                entry.target.style.animation = `float-in 1s ${entry.target.dataset.delay} ease-in-out forwards`;
        });
    });

    fadeInElements.forEach((fadeInElement) => {
        fadeInObserver.observe(fadeInElement);
    });

    floatInElements.forEach((floatInElement) => {
        floatInObserver.observe(floatInElement);
    });
});

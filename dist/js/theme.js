document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".heading__toggle");
    const toggleCircle = document.querySelector(".heading__toggle--circle");

    let toggled = false;

    toggle.addEventListener("click", switchThemeHandler);

    function switchThemeHandler() {
        if (!toggled) {
            document.documentElement.style.setProperty(`--bg-primary-color`, `hsl(0, 0%, 100%)`);
            document.documentElement.style.setProperty(`--bg-secondary-color`, `hsl(225, 100%, 98%)`);
            document.documentElement.style.setProperty(`--primary-color`, `hsl(227, 47%, 96%)`);
            document.documentElement.style.setProperty(`--secondary-color`, `hsl(228, 12%, 44%)`);
            document.documentElement.style.setProperty(`--accent-color`, `hsl(230, 17%, 14%)`);
            toggle.classList.add("active");
            toggleCircle.classList.add("is-toggled");
        } else {
            document.documentElement.style.setProperty(`--bg-primary-color`, `hsl(230, 17%, 14%)`);
            document.documentElement.style.setProperty(`--bg-secondary-color`, `hsl(232, 19%, 15%)`);
            document.documentElement.style.setProperty(`--primary-color`, `hsl(228, 28%, 20%)`);
            document.documentElement.style.setProperty(`--secondary-color`, `hsl(0, 0%, 100%)`);
            document.documentElement.style.setProperty(`--accent-color`, `hsl(228, 34%, 66%)`);
            toggle.classList.remove("active");
            toggleCircle.classList.remove("is-toggled");
        }

        toggled = !toggled;
    }
});

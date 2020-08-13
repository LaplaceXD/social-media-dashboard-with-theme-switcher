document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".heading__toggle");
    const toggleCircle = document.querySelector(".heading__toggle--circle");
    const html = document.querySelector("html");
    const cssVar = [
        `--bg-primary-color`,
        `--bg-secondary-color`,
        `--primary-color`,
        `--secondary-color`,
        `--accent-color`,
    ];

    const lightThemeSet = [
        `hsl(0, 0%, 100%)`,
        `hsl(225, 100%, 98%)`,
        `hsl(227, 47%, 96%)`,
        `hsl(228, 12%, 44%)`,
        `hsl(230, 17%, 14%)`,
    ];

    const darkThemeSet = [
        `hsl(230, 17%, 14%)`,
        `hsl(232, 19%, 15%)`,
        `hsl(228, 28%, 20%)`,
        `hsl(0, 0%, 100%)`,
        `hsl(228, 34%, 66%)`,
    ];

    let toggled = false;

    toggle.addEventListener("click", switchThemeHandler);

    function switchThemeHandler() {
        if (!toggled) {
            document.documentElement.style.setProperty(`--bg-primary-color`, `hsl(0, 0%, 100%)`);
            document.documentElement.style.setProperty(`--bg-secondary-color`, `hsl(225, 100%, 98%)`);
            document.documentElement.style.setProperty(`--primary-color`, `hsl(227, 47%, 96%)`);
            document.documentElement.style.setProperty(`--secondary-color`, `hsl(228, 12%, 44%)`);
            document.documentElement.style.setProperty(`--accent-color`, `hsl(230, 17%, 14%)`);
            toggleCircle.classList.add("is-toggled");
            switchToLightTheme();
        } else {
            toggleCircle.classList.remove("is-toggled");
        }

        toggled = !toggled;
    }
});

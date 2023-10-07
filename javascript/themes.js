// Switch between dark and light mode.
function switchTheme() {
    let element = document.getElementById('themeSwitchInput');

    let themeLink = element.getAttribute('thememode') == "light" ? 'css/themes/light.css' : 'css/themes/dark.css';
    let iconLink = element.getAttribute('thememode') == "light" ? 'assets/images/light_mode.svg' : 'assets/images/dark_mode.svg';
    element.getAttribute('thememode') == "light" ? element.style.filter = "" : element.style.filter = "invert(72%) sepia(100%) saturate(344%) hue-rotate(14deg) brightness(111%) contrast(87%)" ;
    element.setAttribute('src', iconLink);
    document.getElementById('css-theme').setAttribute('href', themeLink);
}

function clickThemeIcon() {
    let element = document.getElementById('themeSwitchInput');

    let theme = element.getAttribute('thememode') == "light" ? "dark" : "light";
    element.setAttribute("thememode", theme);
    switchTheme();
}

let theme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? "dark" : "light";
document.getElementById('themeSwitchInput').setAttribute('thememode', theme);
switchTheme();

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', element => {
    document.getElementById('themeSwitchInput').setAttribute('thememode', element.matches ? "dark" : "light");
    switchTheme();
});
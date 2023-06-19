// Switch between dark and light mode.

function switchTheme() {
    const theme = document.getElementById('css-theme').getAttribute('href');
    if (theme == 'css/themes/dark.css') {
        document.getElementById('css-theme').setAttribute('href', 'css/themes/light.css');
    } else {
        document.getElementById('css-theme').setAttribute('href', 'css/themes/dark.css');
    }
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.getElementById('css-theme').setAttribute('href', 'css/themes/dark.css');
} else {
    document.getElementById('css-theme').setAttribute('href', 'css/themes/light.css');
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const newColorScheme = e.matches ? "dark" : "light";
    document.getElementById('css-theme').setAttribute('href', `css/themes/${newColorScheme}.css`);
});
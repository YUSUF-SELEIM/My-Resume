function updateLogo() {
    var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    var darkLogoSrc = './css/assets/logo-black.svg';
    var whiteLogoSrc = './css/assets/logo-white.svg';
    var logoElement = document.getElementById('logo');

    // Change the icons inside the button based on previous settings
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        themeToggleLightIcon.classList.remove('hidden');
        logoElement.src = whiteLogoSrc;
    } else {
        themeToggleDarkIcon.classList.remove('hidden');
        logoElement.src = darkLogoSrc;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    updateLogo();

    var themeToggleBtn = document.getElementById('theme-toggle');
    themeToggleBtn.addEventListener('click', function () {
        var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
        var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
        var darkLogoSrc = './css/assets/logo-black.svg';
        var whiteLogoSrc = './css/assets/logo-white.svg';
        var logoElement = document.getElementById('logo');

        // toggle icons inside button
        themeToggleDarkIcon.classList.toggle('hidden');
        themeToggleLightIcon.classList.toggle('hidden');

        // update logo image
        if (document.documentElement.classList.contains('dark')) {
            logoElement.src = whiteLogoSrc;
        } else {
            logoElement.src = darkLogoSrc;
        }

        // update theme setting in local storage
        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }

        // update the logo after the theme has changed
        updateLogo();
    });
});
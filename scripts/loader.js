document.addEventListener("DOMContentLoaded", function () {
    const nav = document.getElementById('navbar');
    const body = document.body
    const loadingScreen = document.getElementById('loadingScreen');
    const mainContent = document.getElementById('mainContent');
    // Hide styles when script loads
    nav.style.opacity = '0';
    mainContent.style.opacity = '0';
    body.style.overflow = "hidden";
    // Let the user see the loading screen while loading elements
    setTimeout(function () {
        // Hide loading screen
        loadingScreen.style.display = "none";
        // Allow the user to scroll and see the content
        body.style.overflowX = "none";
        body.style.overflowY = "auto";
        nav.style.transition = 'opacity 0.5s ease';
        nav.style.opacity = '1';
        mainContent.style.transition = 'opacity 0.5s ease';
        mainContent.style.opacity = '1';
    }, 2000);
});
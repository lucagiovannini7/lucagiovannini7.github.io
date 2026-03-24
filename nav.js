document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('nav-toggle');
    const nav = document.querySelector('header nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
        const isOpen = nav.classList.toggle('nav-open');
        toggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a link is tapped on mobile
    nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            nav.classList.remove('nav-open');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });
});

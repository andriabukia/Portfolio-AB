// ==========================================================================
// Portfolio & Burger Menu - Basic JavaScript
// ==========================================================================

document.addEventListener('DOMContentLoaded', function () {
    // Burger Menu Logic
    const burgerBtn = document.getElementById('burger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const burgerOpenIcon = document.getElementById('burger-open-icon');
    const burgerCloseIcon = document.getElementById('burger-close-icon');

    if (burgerBtn && mobileMenu) {
        burgerBtn.addEventListener('click', function () {
            const isHidden = mobileMenu.classList.contains('hidden');

            if (isHidden) {
                // Open Menu
                mobileMenu.classList.remove('hidden');
                if (burgerOpenIcon) burgerOpenIcon.classList.add('hidden');
                if (burgerCloseIcon) burgerCloseIcon.classList.remove('hidden');
            } else {
                // Close Menu
                mobileMenu.classList.add('hidden');
                if (burgerOpenIcon) burgerOpenIcon.classList.remove('hidden');
                if (burgerCloseIcon) burgerCloseIcon.classList.add('hidden');
            }
        });

        // Close menu when clicking on any navigation link
        const navLinks = mobileMenu.querySelectorAll('a');
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                mobileMenu.classList.add('hidden');
                if (burgerOpenIcon) burgerOpenIcon.classList.remove('hidden');
                if (burgerCloseIcon) burgerCloseIcon.classList.add('hidden');
            });
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    // Hamburger Menu Logic
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navContainer = document.querySelector('.nav-container');

    if (menuBtn && navContainer) {
        menuBtn.addEventListener('click', function () {
            this.classList.toggle('active');
            navContainer.classList.toggle('active');
        });
    }

    // Contact Form Dummy Submisison
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('お問い合わせありがとうございます。\n（デモサイトのため送信は行われません）');
            contactForm.reset();
        });
    }
});

$('.nlink').click(function () {
    var id = $(this).attr('id');
    $('html, body').animate({
        scrollTop: ($('#' + id + '.container').offset().top)
    }, 1000);
});

document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.nitem');
    const navLinks = document.querySelectorAll('.nlink');
    const sections = document.querySelectorAll('.container');

    // Function to update the active nav link based on scroll position
    function updateActiveNav() {
        let index = sections.length;

        while (--index && window.scrollY + 60 < sections[index].offsetTop) {}

        navItems.forEach(item => item.classList.remove('active'));
        navLinks.forEach(link => link.classList.remove('active'));

        if (index >= 0) {
            navItems[index].classList.add('active');
            navLinks[index].classList.add('active');
        }
    }

    // Initialize the active link on page load
    updateActiveNav();

    // Update active link on scroll
    window.addEventListener('scroll', updateActiveNav);

    // Update active link on click and scroll to the section smoothly
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const sectionID = this.getAttribute('data-section');
            const section = document.getElementById(sectionID);

            // Scroll to the section smoothly
            window.scrollTo({
                top: section.offsetTop, // Adjust offset for fixed navbar height
                behavior: 'smooth'
            });

            // Update active class on click
            navItems.forEach(item => item.classList.remove('active'));
            navLinks.forEach(link => link.classList.remove('active'));

            this.classList.add('active');
            this.parentElement.classList.add('active');
        });
    });
});
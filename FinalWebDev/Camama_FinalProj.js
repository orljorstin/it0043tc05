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

    updateActiveNav();

    window.addEventListener('scroll', updateActiveNav);

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const sectionID = this.getAttribute('data-section');
            const section = document.getElementById(sectionID);

            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });

            navItems.forEach(item => item.classList.remove('active'));
            navLinks.forEach(link => link.classList.remove('active'));

            this.classList.add('active');
            this.parentElement.classList.add('active');
        });
    });
});
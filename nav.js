(function () {
    const button = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav-links');
    if (!button || !nav) return;

    const icon = button.querySelector('i');
    const mobileQuery = window.matchMedia('(max-width: 1050px)');

    function setMenuOpen(open) {
        document.body.classList.toggle('nav-open', open);
        button.setAttribute('aria-expanded', String(open));
        button.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
        if (icon) {
            icon.classList.toggle('fa-bars', !open);
            icon.classList.toggle('fa-times', open);
        }
    }

    button.addEventListener('click', function () {
        setMenuOpen(button.getAttribute('aria-expanded') !== 'true');
    });

    nav.addEventListener('click', function (event) {
        const link = event.target.closest('a');
        if (!link) return;

        if (link.classList.contains('dropbtn') && mobileQuery.matches) {
            event.preventDefault();
            link.parentElement.classList.toggle('open');
            return;
        }

        if (mobileQuery.matches) setMenuOpen(false);
    });

    document.addEventListener('click', function (event) {
        if (mobileQuery.matches && document.body.classList.contains('nav-open') &&
            !event.target.closest('.navbar')) {
            setMenuOpen(false);
        }
    });

    mobileQuery.addEventListener('change', function (event) {
        if (!event.matches) {
            setMenuOpen(false);
            nav.querySelectorAll('.dropdown.open').forEach(function (dropdown) {
                dropdown.classList.remove('open');
            });
        }
    });
})();

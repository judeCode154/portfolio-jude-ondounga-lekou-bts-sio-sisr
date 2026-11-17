(function () {
    const themeKey = 'portfolio-theme';
    let savedTheme = null;
    try {
        savedTheme = localStorage.getItem(themeKey);
    } catch (error) {
        // Le thème reste utilisable même si le stockage du navigateur est indisponible.
    }
    const initialTheme = savedTheme === 'light' ? 'light' : 'dark';

    document.body.dataset.theme = initialTheme;

    const logoArea = document.querySelector('.logo-area');
    const avatar = logoArea && logoArea.querySelector('.avatar');
    if (logoArea && avatar) {
        const profileCard = document.createElement('section');
        profileCard.className = 'profile-card';
        profileCard.setAttribute('aria-label', 'Présentation de Jude ONDOUNGA-LEKOU');
        profileCard.innerHTML =
            '<div class="profile-card-top">' +
                '<span class="profile-card-mark"><i class="fas fa-shield-alt" aria-hidden="true"></i></span>' +
                '<div><h2>Jude ONDOUNGA-LEKOU</h2><p class="profile-role">BTS SIO · option SISR</p></div>' +
            '</div>' +
            '<p class="profile-description"><strong>BTS SIO</strong> : Services informatiques aux organisations.<br>' +
            '<strong>SISR</strong> : Solutions d’infrastructure, systèmes et réseaux.</p>';
        logoArea.appendChild(profileCard);

        avatar.setAttribute('tabindex', '0');
        avatar.setAttribute('role', 'button');
        avatar.setAttribute('aria-label', 'Afficher la présentation de Jude ONDOUNGA-LEKOU');
        avatar.setAttribute('aria-expanded', 'false');

        function toggleProfile(open) {
            const shouldOpen = typeof open === 'boolean' ? open : !logoArea.classList.contains('profile-open');
            logoArea.classList.toggle('profile-open', shouldOpen);
            avatar.setAttribute('aria-expanded', String(shouldOpen));
        }

        avatar.addEventListener('click', function () {
            toggleProfile();
        });
        avatar.addEventListener('keydown', function (event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                toggleProfile();
            } else if (event.key === 'Escape') {
                toggleProfile(false);
                avatar.blur();
            }
        });
        document.addEventListener('click', function (event) {
            if (!logoArea.contains(event.target)) toggleProfile(false);
        });
    }

    const button = document.createElement('button');
    button.className = 'theme-toggle';
    button.type = 'button';
    button.setAttribute('aria-pressed', String(initialTheme === 'light'));
    button.innerHTML = '<i class="fas fa-sun" aria-hidden="true"></i>';
    document.body.appendChild(button);

    let backToTop = document.querySelector('.back-to-top');
    if (!backToTop) {
        backToTop = document.createElement('a');
        backToTop.href = '#top';
        backToTop.className = 'back-to-top';
        backToTop.innerHTML = '<i class="fas fa-arrow-up" aria-hidden="true"></i>';
    }
    backToTop.setAttribute('aria-label', 'Retour en haut de la page');
    backToTop.title = 'Retour en haut';
    document.body.appendChild(backToTop);

    backToTop.addEventListener('click', function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
        });
    });

    function updateButton(theme) {
        const isLight = theme === 'light';
        button.setAttribute('aria-pressed', String(isLight));
        button.setAttribute('aria-label', isLight ? 'Passer en mode nuit' : 'Passer en mode jour');
        button.title = isLight ? 'Passer en mode nuit' : 'Passer en mode jour';
        button.innerHTML = isLight
            ? '<i class="fas fa-moon" aria-hidden="true"></i>'
            : '<i class="fas fa-sun" aria-hidden="true"></i>';
    }

    updateButton(initialTheme);

    button.addEventListener('click', function () {
        const nextTheme = document.body.dataset.theme === 'light' ? 'dark' : 'light';
        document.body.dataset.theme = nextTheme;
        try {
            localStorage.setItem(themeKey, nextTheme);
        } catch (error) {
            // Le changement s'applique à la page même sans persistance.
        }
        updateButton(nextTheme);
    });
})();

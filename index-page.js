// Interactions de la page d’accueil.
(function () {
    const button = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav-links');

    if (button && nav) {
        const icon = button.querySelector('i');

        function closeMenu() {
            document.body.classList.remove('nav-open');
            button.setAttribute('aria-expanded', 'false');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }

        function updateMenuForViewport() {
            if (window.innerWidth > 900) closeMenu();
        }

        const sectionLinks = Array.from(nav.querySelectorAll('a[href^="#"]'))
            .map(function (link) {
                return {
                    link: link,
                    section: document.getElementById(link.getAttribute('href').slice(1))
                };
            })
            .filter(function (item) {
                return item.section;
            });
        const navbar = document.querySelector('.navbar');

        function setActiveSectionLink(activeLink) {
            sectionLinks.forEach(function (item) {
                const isActive = item.link === activeLink;
                item.link.classList.toggle('active', isActive);
                if (isActive) {
                    item.link.setAttribute('aria-current', 'location');
                } else {
                    item.link.removeAttribute('aria-current');
                }
            });
        }

        function updateActiveSection() {
            if (!sectionLinks.length) return;

            const threshold = Math.max(
                (navbar ? navbar.offsetHeight : 0) + 48,
                window.innerHeight * 0.3
            );
            let activeItem = sectionLinks[0];

            sectionLinks.forEach(function (item) {
                if (item.section.getBoundingClientRect().top <= threshold) {
                    activeItem = item;
                }
            });

            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
                activeItem = sectionLinks[sectionLinks.length - 1];
            }

            setActiveSectionLink(activeItem.link);
        }

        let activeSectionFrame = 0;
        window.addEventListener('scroll', function () {
            if (activeSectionFrame) return;
            activeSectionFrame = window.requestAnimationFrame(function () {
                activeSectionFrame = 0;
                updateActiveSection();
            });
        }, { passive: true });
        window.addEventListener('resize', updateActiveSection);
        window.addEventListener('hashchange', updateActiveSection);
        window.addEventListener('pageshow', updateActiveSection);
        updateActiveSection();

        button.addEventListener('click', function () {
            const isOpen = document.body.classList.toggle('nav-open');
            button.setAttribute('aria-expanded', String(isOpen));
            if (icon) {
                icon.classList.toggle('fa-bars', !isOpen);
                icon.classList.toggle('fa-times', isOpen);
            }
        });

        nav.addEventListener('click', function (event) {
            const link = event.target.closest('a');
            if (!link) return;

            if (link.classList.contains('dropbtn')) {
                event.preventDefault();
                link.parentElement.classList.toggle('open');
                return;
            }

            const href = link.getAttribute('href');
            if (href && href.startsWith('#') && href !== '#') {
                const target = document.getElementById(href.slice(1));
                if (target) {
                    event.preventDefault();
                    setActiveSectionLink(link);
                    const navHeight = document.querySelector('.navbar')?.offsetHeight || 80;
                    const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 8;
                    window.scrollTo({
                        top: Math.max(0, top),
                        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
                    });
                }
            }
            if (window.innerWidth <= 900) closeMenu();
        });

        document.addEventListener('click', function (event) {
            if (document.body.classList.contains('nav-open') && !event.target.closest('.navbar')) closeMenu();
        });
        window.addEventListener('resize', updateMenuForViewport);
        updateMenuForViewport();
    }

    document.querySelectorAll('.accordion-header').forEach(function (header) {
        header.addEventListener('click', function () {
            const wasExpanded = header.getAttribute('aria-expanded') === 'true';
            document.querySelectorAll('.accordion-header').forEach(function (otherHeader) {
                if (otherHeader !== header) {
                    otherHeader.setAttribute('aria-expanded', 'false');
                    otherHeader.nextElementSibling.style.maxHeight = null;
                }
            });
            header.setAttribute('aria-expanded', String(!wasExpanded));
            header.nextElementSibling.style.maxHeight = wasExpanded
                ? null
                : header.nextElementSibling.scrollHeight + 'px';
        });
    });

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const name = document.getElementById('contact-name').value.trim();
            const email = document.getElementById('contact-email').value.trim();
            const subject = document.getElementById('contact-subject').value.trim();
            const message = document.getElementById('contact-message').value.trim();
            const to = 'j.ondounga.it@gmail.com';
            const body = 'Bonjour Jude,\r\n\r\nMon nom : ' + name + '\r\nMon email : ' + email + '\r\n\r\n' + message + '\r\n\r\nCordialement,';
            window.location.href = 'mailto:' + to + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
        });
    }
})();

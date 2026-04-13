document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for Reveal Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, observerOptions);

    // Initial check for elements that should animate on scroll
    // (Additional reveal logic can be added here as we add more sections)

    // Unified Background Configuration
    const BACKGROUND_CONFIG = {
        orbCount: 4,
        minSize: 400,
        maxSize: 600,
        minSpeed: 1,
        maxSpeed: 2,
        opacity: 0.2,
        blur: '50px',
        parallaxFactor: 1,
        color: '#0070f3' // var(--accent-color)
    };

    const orbs = [];

    // Ambient Orbs logic
    function createOrbs() {
        // Clear existing orbs from DOM
        document.querySelectorAll('.ambient-orb').forEach(o => o.remove());
        orbs.length = 0;

        for (let i = 0; i < BACKGROUND_CONFIG.orbCount; i++) {
            const orbEl = document.createElement('div');
            orbEl.className = 'ambient-orb';

            const size = Math.random() * (BACKGROUND_CONFIG.maxSize - BACKGROUND_CONFIG.minSize) + BACKGROUND_CONFIG.minSize;

            orbEl.style.width = `${size}px`;
            orbEl.style.height = `${size}px`;
            orbEl.style.setProperty('--orb-opacity', BACKGROUND_CONFIG.opacity);
            orbEl.style.setProperty('--orb-blur', BACKGROUND_CONFIG.blur);
            orbEl.style.setProperty('--orb-color', BACKGROUND_CONFIG.color);

            const orbData = {
                el: orbEl,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                vx: (Math.random() - 0.5) * BACKGROUND_CONFIG.maxSpeed,
                vy: (Math.random() - 0.5) * BACKGROUND_CONFIG.maxSpeed,
                size: size
            };

            document.body.appendChild(orbEl);
            orbs.push(orbData);
        }
    }

    function updateOrbs(scrollSpeed) {
        orbs.forEach(orb => {
            // Subtle floating movement
            orb.x += orb.vx;
            orb.y += orb.vy + (scrollSpeed * BACKGROUND_CONFIG.parallaxFactor);

            // Infinite screen wraparound
            if (orb.x < -orb.size) orb.x = window.innerWidth;
            if (orb.x > window.innerWidth) orb.x = -orb.size;
            if (orb.y < -orb.size) orb.y = window.innerHeight;
            if (orb.y > window.innerHeight) orb.y = -orb.size;

            orb.el.style.left = `${orb.x}px`;
            orb.el.style.top = `${orb.y}px`;
        });
    }

    function initBackground() {
        createOrbs();
    }

    let lastScrollY = window.scrollY;
    let scrollSpeed = 0;

    function animate() {
        const currentScrollY = window.scrollY;

        // Use a smoother scroll speed calculation to avoid jumps
        const diff = currentScrollY - lastScrollY;
        scrollSpeed = diff * 0.1;
        lastScrollY = currentScrollY;

        updateOrbs(scrollSpeed);

        requestAnimationFrame(animate);
    }
    initBackground();
    animate();
    window.addEventListener('resize', initBackground);

    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Modular Tech Stack Slider Generation
    async function initTechSlider() {
        const container = document.getElementById('tools-slider');
        if (!container) return;

        try {
            // Fetch the automatically generated tech list
            const response = await fetch('assets/icons/tech/tech-list.json');
            if (!response.ok) throw new Error('Failed to load tech list');
            const techStack = await response.json();

            const rowConfigs = [
                { direction: 'left', offset: false },
                { direction: 'right', offset: false },
                { direction: 'left', offset: true },
                { direction: 'right', offset: true }
            ];

            // Split tech items evenly across rows
            const rowCount = rowConfigs.length;
            const chunks = Array.from({ length: rowCount }, () => []);
            techStack.forEach((item, i) => {
                chunks[i % rowCount].push(item);
            });

            // Function to create a tool card
            const createToolCard = (item) => {
                const card = document.createElement('div');
                card.className = 'tool-card';

                const icon = document.createElement('div');
                icon.className = 'tool-icon';
                icon.style.backgroundImage = `url('${item.icon}')`;

                const span = document.createElement('span');
                span.textContent = item.name;

                card.appendChild(icon);
                card.appendChild(span);
                return card;
            };

            rowConfigs.forEach((config, rowIndex) => {
                const row = document.createElement('div');
                row.className = 'tools-row';
                row.setAttribute('data-direction', config.direction);
                if (config.offset) row.setAttribute('data-offset', 'true');

                const track = document.createElement('div');
                track.className = 'tools-track';

                const rowItems = chunks[rowIndex];

                // Clone enough times for seamless infinite scroll
                for (let i = 0; i < 6; i++) {
                    rowItems.forEach(item => {
                        track.appendChild(createToolCard(item));
                    });
                }

                row.appendChild(track);
                container.appendChild(row);
            });
        } catch (error) {
            console.error('Error initializing tech slider:', error);
            // Fallback or friendly error message could go here
        }
    }

    // Experience Timeline Generation
    async function initExperience() {
        const container = document.getElementById('experience-timeline');
        if (!container) return;

        try {
            const response = await fetch('experience.json');
            if (!response.ok) throw new Error('Failed to load experience data');
            const experiences = await response.json();

            experiences.forEach((exp, index) => {
                // Entry wrapper
                const entry = document.createElement('div');
                entry.className = 'experience-entry';
                entry.style.transitionDelay = `${index * 0.15}s`;

                // Date badge – placed on the timeline line (outside card)
                const date = document.createElement('span');
                date.className = 'experience-date';
                date.textContent = exp.start;
                entry.appendChild(date);

                // Card
                const card = document.createElement('div');
                card.className = 'experience-card';

                // Header (title + company only)
                const header = document.createElement('div');
                header.className = 'experience-header';

                const title = document.createElement('span');
                title.className = 'experience-title';
                title.textContent = exp.title;

                const company = document.createElement('span');
                company.className = 'experience-company';
                company.textContent = exp.company;

                header.appendChild(title);
                header.appendChild(company);

                // Bullets – each li gets its own scroll-reveal
                const ul = document.createElement('ul');
                ul.className = 'experience-bullets';
                exp.bullets.forEach((text, bulletIndex) => {
                    const li = document.createElement('li');
                    li.textContent = text;
                    li.style.transitionDelay = `${bulletIndex * 0.08}s`;
                    ul.appendChild(li);
                    // Register each bullet with observer
                    observer.observe(li);
                });

                card.appendChild(header);
                card.appendChild(ul);
                entry.appendChild(card);
                container.appendChild(entry);

                // Register entry with IntersectionObserver for scroll reveal
                observer.observe(entry);
            });
        } catch (error) {
            console.error('Error initializing experience timeline:', error);
        }
    }

    // Use Cases Section
    async function initUseCases() {
        const grid = document.getElementById('use-cases-grid');
        if (!grid) return;

        try {
            const [casesRes, techRes] = await Promise.all([
                fetch('use-cases.json'),
                fetch('assets/icons/tech/tech-list.json')
            ]);
            if (!casesRes.ok || !techRes.ok) throw new Error('Failed to load use-case data');

            const useCases = await casesRes.json();
            const techList = await techRes.json();

            // Build lookup: id → { name, icon }
            const techMap = {};
            techList.forEach(t => { techMap[t.id] = t; });

            useCases.forEach((uc, index) => {
                const card = document.createElement('div');
                card.className = 'use-case-card';
                card.style.transitionDelay = `${index * 0.1}s`;

                // Title
                const title = document.createElement('h3');
                title.className = 'use-case-title';
                title.textContent = uc.title;

                // Icons row
                const iconsRow = document.createElement('div');
                iconsRow.className = 'use-case-icons';

                uc.apps.forEach(appId => {
                    const tech = techMap[appId];
                    if (!tech) return;

                    const iconWrap = document.createElement('div');
                    iconWrap.className = 'use-case-icon-wrap';

                    const iconEl = document.createElement('div');
                    iconEl.className = 'use-case-icon';
                    iconEl.style.backgroundImage = `url('${tech.icon}')`;

                    const tooltip = document.createElement('span');
                    tooltip.className = 'use-case-tooltip';
                    tooltip.textContent = tech.name;

                    iconWrap.appendChild(iconEl);
                    iconWrap.appendChild(tooltip);
                    iconsRow.appendChild(iconWrap);
                });

                // Description
                const desc = document.createElement('p');
                desc.className = 'use-case-description';
                desc.textContent = uc.description;

                card.appendChild(title);
                card.appendChild(iconsRow);
                card.appendChild(desc);
                grid.appendChild(card);

                observer.observe(card);
            });
        } catch (error) {
            console.error('Error initializing use cases:', error);
        }
    }

    initTechSlider();
    initExperience();
    initUseCases();

    // Scroll Spy for Navbar Links
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');
    const navUnderline = document.querySelector('.nav-underline');
    let lastScrollPosition = window.scrollY;
    let scrollDirection = 'down'; // Default to down to avoid reversed first animation

    function updateActiveNavLink() {
        let currentSectionId = '';
        const scrollPosition = window.scrollY;

        // Only update direction if there's actual movement to prevent noise
        if (Math.abs(scrollPosition - lastScrollPosition) > 2) {
            scrollDirection = scrollPosition > lastScrollPosition ? 'down' : 'up';
            lastScrollPosition = scrollPosition;
        }

        const checkPosition = scrollPosition + 200; // Increased offset for better detection

        // SPECIAL CASE: Top of page is ALWAYS home
        if (scrollPosition < 50) {
            currentSectionId = 'hero';
        } else {
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if (checkPosition >= sectionTop && checkPosition < sectionTop + sectionHeight) {
                    currentSectionId = section.getAttribute('id');
                }
            });
        }

        navLinks.forEach(link => {
            const isTarget = link.getAttribute('href') === `#${currentSectionId}`;

            if (isTarget) {
                if (!link.classList.contains('active')) {
                    // Entry logic: set start position WITHOUT transition to avoid reversal
                    link.style.transition = 'none';

                    if (scrollDirection === 'down') {
                        link.style.setProperty('--nav-fill-pos', '100%');
                    } else {
                        link.style.setProperty('--nav-fill-pos', '0%');
                    }

                    // Force reflow
                    link.offsetHeight;

                    link.style.transition = '';
                    requestAnimationFrame(() => {
                        link.style.setProperty('--nav-fill-pos', '50%');
                        link.classList.add('active');
                    });
                }

                // Position underline
                const parentRect = link.parentElement.parentElement.getBoundingClientRect();
                const rect = link.getBoundingClientRect();
                navUnderline.style.left = `${rect.left - parentRect.left}px`;
                navUnderline.style.width = `${rect.width}px`;
                navUnderline.classList.add('active');
            } else {
                if (link.classList.contains('active')) {
                    if (scrollDirection === 'down') {
                        link.style.setProperty('--nav-fill-pos', '0%');
                    } else {
                        link.style.setProperty('--nav-fill-pos', '100%');
                    }
                    link.classList.remove('active');
                }
            }
        });

        // Update distances for mobile effect
        if (window.innerWidth <= 768) {
            const activeIndex = Array.from(navLinks).findIndex(link => link.classList.contains('active'));

            navLinks.forEach((link, index) => {
                const listItem = link.parentElement;

                if (activeIndex === -1) {
                    // Fallback to Home (index 0) if no section detected
                    listItem.setAttribute('data-dist', index === 0 ? 0 : index);
                } else {
                    const distance = Math.abs(index - activeIndex);
                    listItem.setAttribute('data-dist', distance);
                }
            });
        }
        // Update mobile overlay menu active state
        const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
        mobileLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    }

    // Mobile Menu Toggle Logic
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileOverlay = document.querySelector('.mobile-menu-overlay');
    const closeMenu = document.querySelector('.close-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-nav-links a');

    function toggleMenu() {
        mobileOverlay.classList.toggle('active');
        document.body.style.overflow = mobileOverlay.classList.contains('active') ? 'hidden' : '';
    }

    if (menuToggle) menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    if (closeMenu) closeMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    // Close menu when clicking outside mobile-menu-content
    mobileOverlay.addEventListener('click', (e) => {
        // If the click is directly on the overlay (the blurred area) 
        // and not on the sidebar content itself, close it.
        if (e.target === mobileOverlay) {
            toggleMenu();
        }
    });

    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu();
        });
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileOverlay.classList.contains('active')) {
            toggleMenu();
        }
    });

    window.addEventListener('scroll', updateActiveNavLink);

    // Initial check with a small delay to ensure geometry is correct
    requestAnimationFrame(() => {
        updateActiveNavLink();
        // Second pass to catch any late layout changes
        setTimeout(updateActiveNavLink, 100);
    });
});

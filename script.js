        // Navbar Scroll Logic
        const navbar = document.getElementById('navbar');
        const logoText = document.getElementById('logo-text');
        const navLinks = document.querySelectorAll('.nav-link');
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
                const navLogoImg = document.getElementById('nav-logo-img'); // Get the image element

        // Initial check in case of page refresh while scrolled
        checkScroll();

        window.addEventListener('scroll', checkScroll);

        function checkScroll() {
            if (window.scrollY > 20) {
                // Scrolled Down State: White BG, Dark Text
                navbar.classList.add('bg-white', 'shadow-md', 'py-0');
                navbar.classList.remove('bg-transparent', 'py-2');
                
                logoText.classList.remove('text-white');
                logoText.classList.add('text-navy');

                // Switch to Colored Logo
                if(navLogoImg) navLogoImg.src = "assets/logo.png";
                
                navLinks.forEach(link => {
                    link.classList.remove('text-gray-200');
                    link.classList.add('text-gray-600');
                });
                
                mobileMenuBtn.classList.remove('text-white');
                mobileMenuBtn.classList.add('text-navy');

            } else {
                // Top State: Transparent BG, White Text
                navbar.classList.remove('bg-white', 'shadow-md', 'py-0');
                navbar.classList.add('bg-transparent', 'py-2');
                
                logoText.classList.add('text-white');
                logoText.classList.remove('text-navy');

                // Switch to White Logo
                if(navLogoImg) navLogoImg.src = "assets/logo-white.png";
                
                navLinks.forEach(link => {
                    link.classList.add('text-gray-200');
                    link.classList.remove('text-gray-600');
                });
                
                mobileMenuBtn.classList.add('text-white');
                mobileMenuBtn.classList.remove('text-navy');
            }
        }

        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');

        btn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close menu when clicking a link
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
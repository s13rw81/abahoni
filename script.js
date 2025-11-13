/**
 * Abahoni Club - Durgotsov 2026
 * Main JavaScript file
 * Handles: Mobile menu toggle, Theme toggle, Smooth scrolling, Navigation active states
 */

(function() {
    'use strict';
    
    // DOM Elements
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    const themeToggle = document.getElementById('themeToggle');
    const navLinks = document.querySelectorAll('.nav-link');
    const body = document.body;
    const html = document.documentElement;
    
    // Initialize theme from localStorage
    function initTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        body.className = savedTheme + '-theme';
        updateThemeIcon(savedTheme);
    }
    
    // Update theme icon
    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
    
    // Toggle theme
    function toggleTheme() {
        const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.classList.remove(currentTheme + '-theme');
        body.classList.add(newTheme + '-theme');
        
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        
        // Announce theme change to screen readers
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', 'polite');
        announcement.className = 'sr-only';
        announcement.textContent = `Switched to ${newTheme} theme`;
        document.body.appendChild(announcement);
        setTimeout(() => announcement.remove(), 1000);
    }
    
    // Toggle mobile menu
    function toggleMobileMenu() {
        const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
        mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
        mobileMenuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (!isExpanded) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    }
    
    // Close mobile menu
    function closeMobileMenu() {
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        body.style.overflow = '';
    }
    
    // Smooth scroll to section
    function smoothScrollTo(target) {
        const targetElement = document.querySelector(target);
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }
    
    // Update active navigation link based on scroll position
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.pageYOffset + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Handle navigation link clicks
    function handleNavLinkClick(e) {
        const href = e.currentTarget.getAttribute('href');
        
        if (href.startsWith('#')) {
            e.preventDefault();
            smoothScrollTo(href);
            closeMobileMenu();
            
            // Update active state immediately
            navLinks.forEach(link => link.classList.remove('active'));
            e.currentTarget.classList.add('active');
        }
    }
    
    // Handle CTA button clicks
    function handleCTAClick(e) {
        const href = e.currentTarget.getAttribute('href');
        
        if (href && href.startsWith('#')) {
            e.preventDefault();
            smoothScrollTo(href);
        }
    }
    
    // Event Listeners
    document.addEventListener('DOMContentLoaded', function() {
        // Initialize theme
        initTheme();
        
        // Mobile menu toggle
        if (mobileMenuToggle) {
            mobileMenuToggle.addEventListener('click', toggleMobileMenu);
        }
        
        // Theme toggle
        if (themeToggle) {
            themeToggle.addEventListener('click', toggleTheme);
        }
        
        // Navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', handleNavLinkClick);
        });
        
        // CTA buttons
        const ctaButtons = document.querySelectorAll('.btn[href^="#"]');
        ctaButtons.forEach(button => {
            button.addEventListener('click', handleCTAClick);
        });
        
        // Update active nav link on scroll
        let scrollTimeout;
        window.addEventListener('scroll', function() {
            if (scrollTimeout) {
                window.cancelAnimationFrame(scrollTimeout);
            }
            scrollTimeout = window.requestAnimationFrame(updateActiveNavLink);
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (navMenu.classList.contains('active') && 
                !navMenu.contains(e.target) && 
                !mobileMenuToggle.contains(e.target)) {
                closeMobileMenu();
            }
        });
        
        // Close mobile menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                closeMobileMenu();
                mobileMenuToggle.focus();
            }
        });
        
        // Handle scroll indicator click
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', function() {
                smoothScrollTo('#durgotsov26');
            });
        }
    });
    
    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
        if (resizeTimeout) {
            clearTimeout(resizeTimeout);
        }
        resizeTimeout = setTimeout(function() {
            // Close mobile menu on resize to desktop
            if (window.innerWidth > 767 && navMenu.classList.contains('active')) {
                closeMobileMenu();
            }
        }, 250);
    });
    
    // Add smooth scroll polyfill for older browsers
    if (!('scrollBehavior' in document.documentElement.style)) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15/dist/smooth-scroll.polyfills.min.js';
        document.head.appendChild(script);
    }
})();

/**
 * Optional: GitHub repos badge (commented out)
 * Uncomment and modify if you want to display GitHub repositories
 */
/*
async function loadGitHubRepos() {
    try {
        const response = await fetch('https://api.github.com/users/abahoni-club/repos?sort=updated&per_page=3');
        const repos = await response.json();
        
        const repoBadge = document.createElement('div');
        repoBadge.className = 'github-badge';
        repoBadge.innerHTML = `
            <h3>Our Projects</h3>
            <ul>
                ${repos.map(repo => `
                    <li>
                        <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
                            ${repo.name}
                        </a>
                        <span>${repo.stargazers_count} stars</span>
                    </li>
                `).join('')}
            </ul>
        `;
        
        document.querySelector('.hero-content').appendChild(repoBadge);
    } catch (error) {
        console.error('Error loading GitHub repos:', error);
    }
}

// Uncomment to enable GitHub repos badge
// loadGitHubRepos();
*/

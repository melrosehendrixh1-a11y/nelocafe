// Nelo Cafe Digital Studio - Main JavaScript
// Luxury minimalistic website functionality

class NeloCafeApp {
    constructor() {
        this.isMenuOpen = false;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initAnimations();
        this.setupMobileMenu();
        this.initScrollEffects();
        this.setupFormHandling();
        this.initTypewriter();
    }

    setupEventListeners() {
        // Mobile menu toggle
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        if (menuToggle) {
            menuToggle.addEventListener('click', () => this.toggleMobileMenu());
        }

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            const mobileMenu = document.querySelector('.mobile-menu');
            const menuToggle = document.querySelector('.mobile-menu-toggle');
            if (this.isMenuOpen && mobileMenu && !mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                this.closeMobileMenu();
            }
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Form submissions
        const contactForm = document.querySelector('#contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => this.handleFormSubmit(e));
        }

        // WhatsApp button
        const whatsappBtn = document.querySelector('.whatsapp-btn');
        if (whatsappBtn) {
            whatsappBtn.addEventListener('click', () => this.openWhatsApp());
        }

        // Pricing toggle
        const pricingToggle = document.querySelector('.pricing-toggle');
        if (pricingToggle) {
            pricingToggle.addEventListener('change', () => this.togglePricing());
        }
    }

    setupMobileMenu() {
        const mobileMenu = document.querySelector('.mobile-menu');
        const menuOverlay = document.querySelector('.mobile-menu-overlay');
        
        if (mobileMenu && menuOverlay) {
            // Create menu items
            const menuItems = [
                { name: 'Home', href: 'index.html' },
                { name: 'About', href: 'about.html' },
                { name: 'Services', href: 'services.html' },
                { name: 'Portfolio', href: 'portfolio.html' },
                { name: 'Pricing', href: 'pricing.html' },
                { name: 'Contact', href: 'contact.html' }
            ];

            const menuList = mobileMenu.querySelector('.mobile-menu-list');
            if (menuList) {
                menuList.innerHTML = menuItems.map(item => `
                    <li class="mobile-menu-item">
                        <a href="${item.href}" class="mobile-menu-link" onclick="app.closeMobileMenu()">
                            ${item.name}
                        </a>
                    </li>
                `).join('');
            }
        }
    }

    toggleMobileMenu() {
        const mobileMenu = document.querySelector('.mobile-menu');
        const menuOverlay = document.querySelector('.mobile-menu-overlay');
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        
        if (!this.isMenuOpen) {
            this.openMobileMenu();
        } else {
            this.closeMobileMenu();
        }
    }

    openMobileMenu() {
        const mobileMenu = document.querySelector('.mobile-menu');
        const menuOverlay = document.querySelector('.mobile-menu-overlay');
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        
        if (mobileMenu && menuOverlay && menuToggle) {
            this.isMenuOpen = true;
            
            // Add active classes
            mobileMenu.classList.add('active');
            menuOverlay.classList.add('active');
            menuToggle.classList.add('active');
            
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
            
            // Animate menu items
            const menuItems = mobileMenu.querySelectorAll('.mobile-menu-item');
            menuItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, index * 100);
            });
        }
    }

    closeMobileMenu() {
        const mobileMenu = document.querySelector('.mobile-menu');
        const menuOverlay = document.querySelector('.mobile-menu-overlay');
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        
        if (mobileMenu && menuOverlay && menuToggle) {
            this.isMenuOpen = false;
            
            // Remove active classes
            mobileMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
            menuToggle.classList.remove('active');
            
            // Restore body scroll
            document.body.style.overflow = '';
            
            // Reset menu items
            const menuItems = mobileMenu.querySelectorAll('.mobile-menu-item');
            menuItems.forEach(item => {
                item.style.opacity = '';
                item.style.transform = '';
            });
        }
    }

    initAnimations() {
        // Fade in elements on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, observerOptions);

        // Observe all sections
        document.querySelectorAll('.section, .card, .service-item, .portfolio-item').forEach(el => {
            observer.observe(el);
        });

        // Stagger animations for cards
        const cards = document.querySelectorAll('.card, .service-item, .portfolio-item');
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 100}ms`;
        });
    }

    initScrollEffects() {
        // Parallax effect for hero background
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroBackground = document.querySelector('.hero-background');
            
            if (heroBackground) {
                const speed = scrolled * 0.5;
                heroBackground.style.transform = `translateY(${speed}px)`;
            }

            // Header background opacity
            const header = document.querySelector('.header');
            if (header) {
                const opacity = Math.min(scrolled / 100, 0.95);
                header.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
            }
        });
    }

    initTypewriter() {
        // Typewriter effect for hero headline
        const typewriterElement = document.querySelector('.typewriter-text');
        if (typewriterElement && typeof Typed !== 'undefined') {
            new Typed('.typewriter-text', {
                strings: [
                    'Where design meets luxury',
                    'Crafting digital spaces that inspire',
                    'Building premium websites',
                    'Elevating South African brands'
                ],
                typeSpeed: 60,
                backSpeed: 30,
                backDelay: 2000,
                loop: true,
                showCursor: true,
                cursorChar: '|'
            });
        }
    }

    setupFormHandling() {
        // Form validation
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            const inputs = form.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                input.addEventListener('blur', () => this.validateField(input));
                input.addEventListener('input', () => this.clearFieldError(input));
            });
        });
    }

    validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        let isValid = true;
        let errorMessage = '';

        // Required field validation
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'This field is required';
        }

        // Email validation
        if (fieldName === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
        }

        // Phone validation
        if (fieldName === 'phone' && value) {
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            if (!phoneRegex.test(value.replace(/\s/g, ''))) {
                isValid = false;
                errorMessage = 'Please enter a valid phone number';
            }
        }

        this.showFieldValidation(field, isValid, errorMessage);
        return isValid;
    }

    showFieldValidation(field, isValid, errorMessage) {
        const errorElement = field.parentNode.querySelector('.field-error');
        
        if (isValid) {
            field.classList.remove('error');
            field.classList.add('valid');
            if (errorElement) {
                errorElement.remove();
            }
        } else {
            field.classList.remove('valid');
            field.classList.add('error');
            
            if (!errorElement) {
                const errorDiv = document.createElement('div');
                errorDiv.className = 'field-error';
                errorDiv.textContent = errorMessage;
                field.parentNode.appendChild(errorDiv);
            } else {
                errorElement.textContent = errorMessage;
            }
        }
    }

    clearFieldError(field) {
        field.classList.remove('error');
        const errorElement = field.parentNode.querySelector('.field-error');
        if (errorElement) {
            errorElement.remove();
        }
    }

    async handleFormSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const submitButton = form.querySelector('button[type="submit"]');
        
        // Validate all fields
        const inputs = form.querySelectorAll('input, textarea');
        let isFormValid = true;
        
        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isFormValid = false;
            }
        });

        if (!isFormValid) {
            this.showFormMessage(form, 'Please correct the errors above', 'error');
            return;
        }

        // Show loading state
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        try {
            // Simulate form submission (replace with actual endpoint)
            await this.simulateFormSubmission(formData);
            
            // Show success message
            this.showFormMessage(form, 'Thank you! Your message has been sent successfully.', 'success');
            form.reset();
            
        } catch (error) {
            // Show error message
            this.showFormMessage(form, 'Sorry, there was an error sending your message. Please try again.', 'error');
        } finally {
            // Reset button state
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
        }
    }

    async simulateFormSubmission(formData) {
        // Simulate API call delay
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate success (90% of the time for demo)
                if (Math.random() > 0.1) {
                    resolve({ success: true });
                } else {
                    reject(new Error('Network error'));
                }
            }, 2000);
        });
    }

    showFormMessage(form, message, type) {
        // Remove existing messages
        const existingMessage = form.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create new message
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message form-message-${type}`;
        messageDiv.textContent = message;
        
        form.appendChild(messageDiv);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.remove();
            }
        }, 5000);
    }

    openWhatsApp() {
        const phoneNumber = '27740650953'; // Your WhatsApp number
        const message = encodeURIComponent('Hello! I\'m interested in your digital studio services. Can we discuss my project?');
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        
        window.open(whatsappUrl, '_blank');
    }

    togglePricing() {
        const toggle = document.querySelector('.pricing-toggle');
        const monthlyPrices = document.querySelectorAll('.monthly-price');
        const annualPrices = document.querySelectorAll('.annual-price');
        
        if (toggle && toggle.checked) {
            // Show annual prices
            monthlyPrices.forEach(price => price.style.display = 'none');
            annualPrices.forEach(price => price.style.display = 'block');
        } else {
            // Show monthly prices
            monthlyPrices.forEach(price => price.style.display = 'block');
            annualPrices.forEach(price => price.style.display = 'none');
        }
    }

    // Portfolio interaction
    openCaseStudy(projectId) {
        // Navigate to case study page
        window.location.href = `case-study-${projectId}.html`;
    }

    // Utility functions
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new NeloCafeApp();
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    .animate-fade-in {
        animation: fadeInUp 0.6s ease-out forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .mobile-menu {
        transform: translateX(100%);
        transition: transform 0.3s ease-in-out;
    }
    
    .mobile-menu.active {
        transform: translateX(0);
    }
    
    .mobile-menu-overlay {
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    }
    
    .mobile-menu-overlay.active {
        opacity: 1;
        visibility: visible;
    }
    
    .mobile-menu-item {
        opacity: 0;
        transform: translateX(30px);
        transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    }
    
    .field-error {
        color: #ff3b30;
        font-size: 14px;
        margin-top: 5px;
    }
    
    .form-message {
        padding: 12px;
        margin-top: 16px;
        border-radius: 8px;
        font-weight: 500;
    }
    
    .form-message-success {
        background-color: #d4edda;
        color: #155724;
        border: 1px solid #c3e6cb;
    }
    
    .form-message-error {
        background-color: #f8d7da;
        color: #721c24;
        border: 1px solid #f5c6cb;
    }
`;
document.head.appendChild(style);
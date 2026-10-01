// Preloader Logic
window.addEventListener("load", function() {
    const preloader = document.getElementById("preloader");
    setTimeout(() => {
        preloader.style.opacity = "0";
        setTimeout(() => {
            preloader.style.display = "none";
            AOS.init({
                once: true,
                offset: 50,
            });
        }, 500);
    }, 1200); 
});

// Top Banner Close Logic
document.getElementById('close-banner').addEventListener('click', function() {
    const banner = document.getElementById('top-banner');
    banner.style.height = '0';
    banner.style.padding = '0';
    banner.style.opacity = '0';
    setTimeout(() => { banner.style.display = 'none'; }, 300);
});

// Shrink Navbar on Scroll
window.addEventListener("scroll", function() {
    const header = document.getElementById("header");
    if (window.scrollY > 50) {
        header.classList.remove("large-nav");
        header.classList.add("shrunk-nav");
    } else {
        header.classList.add("large-nav");
        header.classList.remove("shrunk-nav");
    }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobile-menu");
const navLinks = document.getElementById("nav-links");

mobileMenuBtn.addEventListener("click", function() {
    navLinks.classList.toggle("active-menu");
    
    const icon = this.querySelector('i');
    if(navLinks.classList.contains('active-menu')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Active State Switcher for Nav Links
const links = document.querySelectorAll('.nav-links a:not(.login-btn):not(.get-started-btn)');
links.forEach(link => {
    link.addEventListener('click', function() {
        links.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        
        if(window.innerWidth <= 1024) {
            navLinks.classList.remove("active-menu");
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
            mobileMenuBtn.querySelector('i').classList.add('fa-bars');
        }
    });
});
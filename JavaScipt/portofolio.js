/* ============================================================
   PORTFOLIO JS — Triantafyllos Mylonas
   Language toggle (EN / DE), navbar, animations
   ============================================================ */
 
'use strict';
 
/* ============================================================
   TRANSLATIONS
   ============================================================ */
const translations = {
    en: {
        /* Nav */
        'nav-about':    'About',
        'nav-skills':   'Skills',
        'nav-projects': 'Projects',
        'nav-contact':  'Contact',
        /* Hero */
        'hero-greeting': 'Hi, my name is',
        'hero-tagline':  'I build things for the web &amp; desktop.',
        'hero-desc':     'Application Developer specializing in Java, C#, and web technologies. Currently completing my training as <span class="accent">Fachinformatiker für Anwendungsentwicklung</span> at Schnellecke.',
        'hero-cta':      'Check out my work!',
        /* About */
        'about-title': 'About Me',
        'about-p1': 'The computer is more than just a work tool for me — it\'s a means of communication and creativity. Programming is not just a profession but also my hobby. The variety of possibilities presents a pleasant challenge that I embrace every day.',
        'about-p2': 'My name is Triantafyllos Mylonas, born on February 25, 1985. Happily married and proud father of a wonderful child. My free time is best spent in front of the computer, but also traveling with my family. A cozy cup of coffee in good company I never turn down. I\'m a fan of Iron Man and the Marvel universe in general 😉',
        'about-location': 'Germany',
        /* Journey */
        'journey-title':      'My IT Journey',
        'journey-y1-title':   'Year 1: Conquering Programming',
        'journey-y1-text':    'My journey into IT began at Schnellecke. After three months in the Service Desk, I focused on programming fundamentals and built WPF applications with C#. A highlight was a personnel management app with full CRUD functionality and CSV storage.',
        'journey-y2-title':   'Year 2: Expanding into the Web',
        'journey-y2-text':    'I deepened my WPF/C# skills and built an app that dynamically generates barcodes from user input and embeds them in PDFs. Then I dived into web development — learning HTML, CSS and JavaScript, which led to building my own personal website.',
        'journey-y3-title':   'Year 3: Java &amp; Spring Boot',
        'journey-y3-text':    'Specialized in Java and OOP, developing a desktop app for Excel file comparison. Then explored web applications with Spring Boot and Maven — covering frontend and backend with MVC, JPA, Thymeleaf, Spring Security, and Lombok.',
        'journey-now-title':  'Present: Final Project',
        'journey-now-text':   'Now in the preparation phase for my final project — combining knowledge, creativity and practical application. Ready to demonstrate my skills and contribute to modern innovation.',
        /* Skills */
        'skills-title':    'Skills &amp; Technologies',
        'skills-cat-lang': 'Languages',
        'skills-cat-fw':   'Frameworks &amp; Libraries',
        'skills-cat-tools':'Tools',
        /* Projects */
        'projects-title': 'My Work',
        'projects-note':  'During my training I completed the following projects for Schnellecke Logistics. These represent the intellectual property of the company.',
        'proj-featured':  'Featured Project',
        'proj1-desc':     'A WPF application (C#) that allows users to insert barcodes into PDF documents. Documents cannot be manually modified once barcodes are entered and saved, ensuring data integrity.',
        'proj2-desc':     'A Java desktop application that imports two Excel files and compares them. It generates a third Excel file containing only the differences between the two, which can then be saved by the user.',
        /* Contact */
        'contact-overline': "04. What's Next?",
        'contact-title':    'Get In Touch',
        'contact-desc':     "I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hello — my inbox is always open!",
        'contact-btn':      'Say Hello',
        /* Footer */
        'footer-text':      'Designed &amp; Built by',
        'footer-impressum': 'Impressum / Datenschutz',
    },
 
    de: {
        /* Nav */
        'nav-about':    'Über mich',
        'nav-skills':   'Fähigkeiten',
        'nav-projects': 'Projekte',
        'nav-contact':  'Kontakt',
        /* Hero */
        'hero-greeting': 'Hallo, mein Name ist',
        'hero-tagline':  'Ich entwickle Anwendungen für Web &amp; Desktop.',
        'hero-desc':     'Anwendungsentwickler mit Schwerpunkt Java, C# und Webtechnologien. Derzeit absolviere ich meine Ausbildung als <span class="accent">Fachinformatiker für Anwendungsentwicklung</span> bei Schnellecke.',
        'hero-cta':      'Meine Arbeit ansehen!',
        /* About */
        'about-title': 'Über mich',
        'about-p1': 'Der Computer ist für mich nicht nur ein Arbeitsinstrument — er ist ein Mittel der Kommunikation und Kreativität. Programmierung ist nicht nur ein Beruf, sondern auch mein Hobby. Die Vielfalt der Möglichkeiten stellt eine angenehme Herausforderung dar, der ich mich täglich stelle.',
        'about-p2': 'Mein Name ist Triantafyllos Mylonas, geboren am 25. Februar 1985. Glücklich verheiratet und stolzer Vater eines wunderbaren Kindes. Meine Freizeit verbringe ich am liebsten vor dem Computer, aber auch auf Reisen mit meiner Familie. Eine gemütliche Tasse Kaffee in netter Gesellschaft schlage ich nie aus. Ich bin ein Fan von Iron Man und generell des Marvel-Universums 😉',
        'about-location': 'Deutschland',
        /* Journey */
        'journey-title':      'Meine IT-Reise',
        'journey-y1-title':   'Erstes Jahr: Die Welt der Programmierung',
        'journey-y1-text':    'Meine Reise in die IT-Welt begann bei Schnellecke. Nach drei Monaten im Service Desk konzentrierte ich mich auf die Grundlagen der Programmierung und entwickelte WPF-Anwendungen mit C#. Ein Highlight war eine Personalverwaltungsanwendung mit CRUD-Funktionen und CSV-Speicherung.',
        'journey-y2-title':   'Zweites Jahr: Expansion ins Web',
        'journey-y2-text':    'Ich vertiefte meine WPF/C#-Kenntnisse und entwickelte eine App, die Barcodes aus Benutzereingaben generiert und in PDFs einbettet. Dann tauchte ich in die Webentwicklung ein — ich lernte HTML, CSS und JavaScript, was zur Erstellung meiner eigenen Website führte.',
        'journey-y3-title':   'Drittes Jahr: Java &amp; Spring Boot',
        'journey-y3-text':    'Ich spezialisierte mich auf Java und OOP, entwickelte eine Desktop-App für Excel-Dateivergleiche. Dann erkundete ich Webanwendungen mit Spring Boot und Maven — Frontend und Backend mit MVC, JPA, Thymeleaf, Spring Security und Lombok.',
        'journey-now-title':  'Gegenwart: Abschlussprojekt',
        'journey-now-text':   'Jetzt befinde ich mich in der Vorbereitungsphase für mein Abschlussprojekt — ein weiteres Kapitel, das Wissen, Kreativität und Praxis verbindet. Bereit, meine Fähigkeiten unter Beweis zu stellen und zur modernen Innovation beizutragen.',
        /* Skills */
        'skills-title':    'Fähigkeiten &amp; Technologien',
        'skills-cat-lang': 'Sprachen',
        'skills-cat-fw':   'Frameworks &amp; Bibliotheken',
        'skills-cat-tools':'Tools',
        /* Projects */
        'projects-title': 'Meine Arbeit',
        'projects-note':  'Im Rahmen meiner Ausbildung habe ich folgende Projekte für Schnellecke Logistics durchgeführt. Diese stellen das geistige Eigentum des Unternehmens dar.',
        'proj-featured':  'Featured Projekt',
        'proj1-desc':     'Ein WPF-Programm (C#), das es ermöglicht, Barcodes in PDF-Dokumente einzufügen. Die Dokumente können nicht manuell geändert werden, sobald der Benutzer die Barcodes eingibt und speichert.',
        'proj2-desc':     'Eine Java-Desktop-Anwendung, die zwei Excel-Dateien importiert und vergleicht. Sie erstellt eine dritte Excel-Datei mit nur den unterschiedlichen Daten, die der Benutzer anschließend speichern kann.',
        /* Contact */
        'contact-overline': '04. Was kommt als Nächstes?',
        'contact-title':    'Kontakt aufnehmen',
        'contact-desc':     'Ich bin derzeit auf der Suche nach neuen Möglichkeiten. Ob Sie eine Frage, eine Projektidee haben oder einfach Hallo sagen möchten — mein Posteingang ist immer offen!',
        'contact-btn':      'Hallo sagen',
        /* Footer */
        'footer-text':      'Designed &amp; Built by',
        'footer-impressum': 'Impressum / Datenschutz',
    }
};
 
/* ============================================================
   LANGUAGE MANAGEMENT
   ============================================================ */
let currentLang = 'en';
 
function applyLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
 
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            el.innerHTML = t[key];
        }
    });
 
    /* Toggle button state */
    document.querySelector('.lang-en').classList.toggle('active', lang === 'en');
    document.querySelector('.lang-de').classList.toggle('active', lang === 'de');
 
    /* <html lang> attribute */
    document.documentElement.lang = lang;
 
    /* Persist */
    try { localStorage.setItem('tm-lang', lang); } catch (_) { /* ignore */ }
}
 
function initLanguageToggle() {
    let saved = 'en';
    try { saved = localStorage.getItem('tm-lang') || 'en'; } catch (_) { /* ignore */ }
    applyLanguage(saved);
 
    document.getElementById('langToggle').addEventListener('click', () => {
        applyLanguage(currentLang === 'en' ? 'de' : 'en');
    });
}
 
 
/* ============================================================
   NAVBAR — scroll shadow + active link
   ============================================================ */
function initNavbar() {
    const navbar = document.getElementById('navbar');
 
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 30);
    }, { passive: true });
 
    /* Highlight active nav link on scroll */
    const sections = document.querySelectorAll('section[id]');
    const links    = document.querySelectorAll('.nav-links a');
 
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    links.forEach(l => l.classList.remove('active'));
                    const match = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
                    if (match) match.classList.add('active');
                }
            });
        }, { threshold: 0.45 });
 
        sections.forEach(s => io.observe(s));
    }
}
 
 
/* ============================================================
   MOBILE MENU
   ============================================================ */
function initMobileMenu() {
    const hamburger  = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
 
    /* Create overlay element */
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);
 
    function openMenu() {
        mobileMenu.classList.add('open');
        overlay.classList.add('open');
        hamburger.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
 
    function closeMenu() {
        mobileMenu.classList.remove('open');
        overlay.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.style.overflow = '';
    }
 
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
    });
 
    overlay.addEventListener('click', closeMenu);
 
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}
 
 
/* ============================================================
   SCROLL ANIMATIONS
   ============================================================ */
function initScrollAnimations() {
    if (!('IntersectionObserver' in window)) {
        /* Fallback: just make everything visible */
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            el.classList.add('in-view');
        });
        return;
    }
 
    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
 
    document.querySelectorAll('.animate-on-scroll').forEach(el => io.observe(el));
 
    /* Also animate skill items individually */
    const skillsObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.skill-item').forEach((item, i) => {
                    item.style.transitionDelay = `${i * 0.06}s`;
                    item.classList.add('animate-on-scroll', 'in-view');
                });
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
 
    document.querySelectorAll('.skills-category').forEach(cat => skillsObserver.observe(cat));
}
 
 
/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    initLanguageToggle();
    initNavbar();
    initMobileMenu();
    initScrollAnimations();
});

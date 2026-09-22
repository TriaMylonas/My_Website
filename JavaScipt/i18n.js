const translations = {
  de: {
    "nav.about": "01. Über mich",
    "nav.now": "02. Heute",
    "nav.heading": "03. Wohin",
    "nav.homelab": "04. Homelab",
    "nav.skills": "05. Skills",
    "nav.projects": "06. Projekte",

    "hero.eyebrow": "Hi, ich bin",
    "hero.tagline": "Fachinformatiker für Anwendungsentwicklung – heute in der Daten- und Systemintegration zuhause.",
    "hero.lede": "Mich interessiert nicht nur, <em>dass</em> etwas funktioniert – sondern <em>warum</em>. Deshalb schaue ich gerne hinter die Kulissen von Systemen, Schnittstellen und Netzwerken.",
    "hero.scrollHint": "↓ scroll runter",

    "about.title": "Über mich",
    "about.personal": "Ich bin glücklich verheiratet und stolzer Vater eines wunderbaren Kindes. Meine Freizeit verbringe ich am liebsten vor dem Computer, aber auch auf Reisen mit meiner Familie. Eine gemütliche Tasse Kaffee in netter Gesellschaft schlage ich nie aus – und ja, ich bin nach wie vor großer Fan von Iron Man und dem Marvel-Universum 😉.",
    "about.professional": "Der Computer ist für mich längst mehr als ein Arbeitsinstrument – er ist ein Werkzeug, mit dem ich verstehen will, wie Dinge im Hintergrund wirklich funktionieren. Meine Ausbildung zum Fachinformatiker für Anwendungsentwicklung habe ich 2024 abgeschlossen. Seitdem arbeite ich im Bereich Datenintegration und wachse Schritt für Schritt in Richtung Data Engineering, DevOps und Netzwerktechnik.",

    "now.title": "Was ich heute mache",
    "now.role": "Junior Data Integration Expert",
    "now.company": "Schnellecke Logistics, Wolfsburg",
    "now.intro": "Ich verbinde über 10 interne und externe Systeme miteinander – darunter SAP S/4HANA, ein Warehouse-Management-System, EDI-Partner wie Automobilhersteller, SharePoint und weitere interne Plattformen. Dafür nutze ich vor allem die Integrationsplattform Lobster.",
    "now.li1": "EDI-Routing und Partneranbindungen",
    "now.li2": "REST- und GraphQL-API-Integrationen",
    "now.li3": "Automatisierung mit PowerShell- und Python-Skripten",
    "now.li4": "Dafür sorgen, dass Daten sauber und zuverlässig zwischen Systemen fließen",
    "now.li5": "Betreuung von zwei Auszubildenden",

    "heading.title": "Wohin ich mich entwickle",
    "heading.text": "Ich bin kein Senior und auch kein Experte – sondern jemand mit einem soliden Fundament und echter Neugier. Mich interessiert, immer wieder Neues zu lernen und zu verstehen, wie es funktioniert – deshalb experimentiere ich auch gerne mit meinem Homelab. Die Zeit, die mir neben Familie und Job bleibt, nutze ich, um Neues auszuprobieren und dazuzulernen. Nach der Ausbildung hat mich mein Weg in die Datenintegration geführt – anfangs war ich skeptisch, mittlerweile finde ich es richtig spannend und habe viel dabei gelernt. Ich bin gespannt, was die Zukunft noch bringt.",

    "homelab.title": "Homelab & Selbstlernen",
    "homelab.text": "Privat betreibe ich mein eigenes Homelab – einfach, weil es mir Spaß macht. Ein Mini-PC und ein NAS bilden die Basis, Docker und Portainer verwalten meine selbst gehosteten Services. Dazu kommen AdGuard Home, Cloudflare Tunnel und Tailscale, um Netzwerk und Zugriffe sauber zu organisieren. Was ich lerne, halte ich in Obsidian als Zettelkasten fest.",
    "homelab.quote": "Ich lerne am besten, indem ich zuhause etwas baue – und auch mal kaputt mache.",

    "skills.title": "Skills",
    "skills.g1.title": "Aus der Ausbildung",
    "skills.g1.kicker": "Ausbildung",
    "skills.g1.p1": "C#",
    "skills.g1.p2": "WPF",
    "skills.g1.p3": "Java",
    "skills.g1.p4": "Spring Boot",
    "skills.g1.p5": "HTML/CSS/JS",
    "skills.g1.p6": "Python",
    "skills.g1.p7": "SQL",
    "skills.g1.p8": "Netzwerk",
    "skills.g2.title": "Integration & Daten",
    "skills.g2.kicker": "täglich im Einsatz",
    "skills.g2.p1": "Lobster",
    "skills.g2.p2": "EDI",
    "skills.g2.p3": "REST/GraphQL APIs",
    "skills.g2.p4": "SAP (OData)",
    "skills.g2.p5": "PowerShell",
    "skills.g2.p6": "Microsoft 365",
    "skills.g3.title": "Homelab & Self-Hosting",
    "skills.g3.kicker": "privates Lernen",
    "skills.g3.p1": "Docker",
    "skills.g3.p2": "Linux",
    "skills.g3.p3": "NAS",
    "skills.g3.p4": "AdGuard Home",
    "skills.g3.p5": "Paperless-ngx",

    "projects.title": "Projekte",
    "projects.intro": "Im zweiten und dritten Jahr meiner Ausbildung habe ich mich intensiv mit Java und objektorientierter Programmierung beschäftigt – von den Grundprinzipien wie Klassen, Vererbung und Interfaces bis hin zum Spring-Ökosystem (Spring Boot, JPA, Thymeleaf, Spring Security, Lombok, Maven). Die drei Projekte hier sind das Ergebnis dieser Reise, vom Excel-Vergleichstool bis zur vollständigen Webanwendung mit Login und Datenbank als Abschlussprojekt. Sie sind geistiges Eigentum von Schnellecke Logistics.",
    "projects.subheading": "Frühere Projekte aus der Ausbildung",
    "projects.kmapp.tag": "Abschlussprojekt · März–April 2024",
    "projects.kmapp.title": "Kilometerstände-Erfassung für die Leasingflotte",
    "projects.kmapp.text": "Mein Abschlussprojekt der Ausbildung: eine Webanwendung (Spring Boot/Java, Bootstrap, MariaDB), die den bisherigen manuellen Prozess ersetzt, bei dem Mitarbeiter ihre Kilometerstände per E-Mail meldeten. Mitarbeiter loggen sich ein und melden monatlich ihren Kilometerstand (keine rückwirkende Änderung möglich), der Fahrzeugverwalter behält den Überblick über die gesamte Leasingflotte, und bei fehlender Meldung verschickt das System automatisch eine Erinnerung.",
    "projects.card1.title": "Add Barcode to PDF",
    "projects.card1.text": "Ein Programm (WPF, C#), das es ermöglicht, Barcodes in PDF-Dokumente einzufügen, ohne dass die Dokumente manuell geändert werden können, wenn der Benutzer die Barcodes eingibt und speichert.",
    "projects.card2.title": "Excel Bestandsvergleich",
    "projects.card2.text": "Ein Programm (Desktop-App, Java), das zwei Excel-Dateien vergleicht und eine dritte Excel-Datei erstellt, die nur die unterschiedlichen Daten der beiden Dateien zeigt und speichert.",
    "projects.card3.title": "Homelab- / Data-Projekt",
    "projects.card3.text": "Hier entsteht bald ein Projekt aus meinem Homelab bzw. dem Datenbereich. [Platzhalter]",

    "footer.built": "Designed &amp; Built by <a href=\"index.html\">Triantafyllos Mylonas</a> <a href=\"./html/impressum.html\">[Impressum/Datenschutz]</a>"
  },
  en: {
    "nav.about": "01. About",
    "nav.now": "02. Now",
    "nav.heading": "03. Heading",
    "nav.homelab": "04. Homelab",
    "nav.skills": "05. Skills",
    "nav.projects": "06. Projects",

    "hero.eyebrow": "Hi, I'm",
    "hero.tagline": "Trained in application development — now at home in data & systems integration.",
    "hero.lede": "I don't just care <em>that</em> something works — I care <em>why</em>. That's why I like looking behind the scenes of systems, interfaces, and networks.",
    "hero.scrollHint": "↓ scroll down",

    "about.title": "About me",
    "about.personal": "I'm happily married and a proud father of a wonderful child. I spend my free time mostly at the computer, but also traveling with my family. I never say no to a good cup of coffee in good company — and yes, I'm still a big fan of Iron Man and the Marvel universe 😉.",
    "about.professional": "The computer has long been more than a work tool for me — it's how I try to understand what's really happening behind the scenes. I finished my apprenticeship as a Fachinformatiker für Anwendungsentwicklung (IT application development) in 2024. Since then I've been working in data integration and growing step by step toward data engineering, DevOps, and networking.",

    "now.title": "What I do now",
    "now.role": "Junior Data Integration Expert",
    "now.company": "Schnellecke Logistics, Wolfsburg",
    "now.intro": "I connect 10+ internal and external systems — including SAP S/4HANA, a warehouse management system, EDI partners such as automotive manufacturers, SharePoint, and other internal platforms — mainly using the Lobster integration platform.",
    "now.li1": "EDI routing and partner connections",
    "now.li2": "REST and GraphQL API integrations",
    "now.li3": "Automation with PowerShell and Python scripts",
    "now.li4": "Keeping data flowing cleanly and reliably between systems",
    "now.li5": "Mentoring two apprentices",

    "heading.title": "Where I'm heading",
    "heading.text": "I'm not a senior, and I'm not an expert — I'm someone with a solid foundation and real curiosity. I enjoy constantly learning new things and understanding how they work — that's also why I like experimenting with my homelab. Whatever time is left after family and work, I like to spend trying out and learning new things. After my apprenticeship, my path led me into data integration — I was skeptical about it at first, but I've come to find it genuinely interesting and have learned a lot along the way. I'm curious to see what the future still has in store.",

    "homelab.title": "Homelab & self-learning",
    "homelab.text": "Privately, I run my own homelab — simply because I enjoy it. A mini PC and a NAS form the base, Docker and Portainer manage my self-hosted services. AdGuard Home, Cloudflare Tunnel, and Tailscale keep my network and access clean. I keep track of what I learn in Obsidian as a Zettelkasten.",
    "homelab.quote": "I learn best by building things at home — and occasionally breaking them.",

    "skills.title": "Skills",
    "skills.g1.title": "From my apprenticeship",
    "skills.g1.kicker": "apprenticeship",
    "skills.g1.p1": "C#",
    "skills.g1.p2": "WPF",
    "skills.g1.p3": "Java",
    "skills.g1.p4": "Spring Boot",
    "skills.g1.p5": "HTML/CSS/JS",
    "skills.g1.p6": "Python",
    "skills.g1.p7": "SQL",
    "skills.g1.p8": "Networking",
    "skills.g2.title": "Integration & Data",
    "skills.g2.kicker": "daily use",
    "skills.g2.p1": "Lobster",
    "skills.g2.p2": "EDI",
    "skills.g2.p3": "REST/GraphQL APIs",
    "skills.g2.p4": "SAP (OData)",
    "skills.g2.p5": "PowerShell",
    "skills.g2.p6": "Microsoft 365",
    "skills.g3.title": "Homelab & self-hosting",
    "skills.g3.kicker": "personal learning",
    "skills.g3.p1": "Docker",
    "skills.g3.p2": "Linux",
    "skills.g3.p3": "NAS",
    "skills.g3.p4": "AdGuard Home",
    "skills.g3.p5": "Paperless-ngx",

    "projects.title": "Projects",
    "projects.intro": "In the second and third year of my apprenticeship I dove deep into Java and object-oriented programming — from core principles like classes, inheritance, and interfaces to the Spring ecosystem (Spring Boot, JPA, Thymeleaf, Spring Security, Lombok, Maven). The three projects shown here are the result of that journey, from a simple Excel comparison tool to a full web app with login and a database as my final project. They are the intellectual property of Schnellecke Logistics.",
    "projects.subheading": "Earlier projects from my apprenticeship",
    "projects.kmapp.tag": "Final apprenticeship project · March–April 2024",
    "projects.kmapp.title": "Mileage Tracking for the Leasing Fleet",
    "projects.kmapp.text": "My final apprenticeship project: a web app (Spring Boot/Java, Bootstrap, MariaDB) that replaced the previous manual process where employees reported their mileage by email. Employees log in and report their monthly odometer reading (no backdating allowed), the fleet manager keeps an overview of the whole leasing fleet, and the system automatically sends a reminder if a report is missing.",
    "projects.card1.title": "Add Barcode to PDF",
    "projects.card1.text": "A program (WPF, C#) that inserts barcodes into PDF documents so that the documents can't be manually altered once the user enters and saves the barcodes.",
    "projects.card2.title": "Excel Inventory Comparison",
    "projects.card2.text": "A program (desktop app, Java) that compares two Excel files and creates a third file showing and saving only the differing data between them.",
    "projects.card3.title": "Homelab / data project",
    "projects.card3.text": "A project from my homelab or the data space is coming here soon. [placeholder]",

    "footer.built": "Designed &amp; Built by <a href=\"index.html\">Triantafyllos Mylonas</a> <a href=\"./html/impressum.html\">[Impressum/Privacy]</a>"
  },
};

function applyLang(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = translations[lang] && translations[lang][key];
    if (value !== undefined) {
      el.innerHTML = value;
    }
  });

  const toggle = document.getElementById("langToggle");
  if (toggle) {
    toggle.textContent = lang === "de" ? "EN" : "DE";
    toggle.setAttribute(
      "aria-label",
      lang === "de" ? "Switch to English" : "Auf Deutsch umschalten"
    );
  }

  localStorage.setItem("triamylo-lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const stored = localStorage.getItem("triamylo-lang");
  applyLang(stored === "en" ? "en" : "de");

  const toggle = document.getElementById("langToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const current = document.documentElement.lang === "en" ? "en" : "de";
      applyLang(current === "de" ? "en" : "de");
    });
  }
});

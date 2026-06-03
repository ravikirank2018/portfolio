/**
 * Ravikiran K - Portfolio Web Application Javascript
 * 
 * Centralized Configuration & Logic
 * This file dynamically renders content from PORTFOLIO_CONFIG, handles
 * theme toggling, project filtering, certificate lightbox, and micro-interactions.
 */

// ==========================================================================
// 1. CENTRALIZED CONFIGURATION (EDIT IMAGE PATHS & DETAILS HERE)
// ==========================================================================

const PORTFOLIO_CONFIG = {
    // Basic Details
    profile: {
        name: "Ravikiran K",
        title: "Technical Project Management & Agile Lead",
        email: "ravikirank201823@gmail.com",
        phone: "+91 8217800894",
        linkedin: "https://www.linkedin.com/in/ravikiran-k-54940125b",
        github: "https://github.com/ravikirank2018",
        portfolioUrl: "https://ravikirank2018.github.io/portfolio/"
    },

    // All available images in the folder mapped in one central object
    images: {
        // Experience certificates/credentials
        gitamProjectLead: "capstone peoject.jpg", // Capstone project certificate
        infosysIntern: "infosys intern.jpg",       // Infosys AI intern certificate
        rinexAmbassador: "rinex.jpg",               // RineX Campus Ambassador certificate
        
        // ServiceNow certificates
        servicenowCad: "servicenow cad.jpg",       // ServiceNow CAD Certificate
        servicenowCsa: "servicenow csa.jpg",       // ServiceNow CSA Certificate
        
        // General certifications & events
        greatLearnPm: "great learn pm.jpg",        // Great Learning PM Certificate
        googleH2k: "google h2k.jpg",                // Google H2K Event Certificate
        
        // AI generated project visuals
        eventAutomation: "event_automation.png",
        adaptivelyPlatform: "adaptively_platform.png",
        cyhackSecurity: "cyhack_security.png",
        taskmateDashboard: "taskmate_dashboard.png",
        deepvisionAi: "deepvision_ai.png"
    },

    // Experience Timeline Data
    experience: [
        {
            role: "Project Lead",
            organization: "GITAM Deemed University",
            location: "Visakhapatnam / Bengaluru",
            duration: "August 2025 - April 2026",
            description: "Led a cross-functional squad of 4 to design, build, and deploy an AI-powered Smart Livestock Management platform.",
            bullets: [
                "Led the development of Smart Livestock Management Dashboard, securing 3rd Place among all college Capstone Projects.",
                "Managed the project scope, timeline, risk mitigation, and milestone reviews from initial planning to final cloud deployment.",
                "Coordinated agile ceremonies including sprint planning, backlog refinement, and demo sessions for stakeholders.",
                "Oversaw integration of machine learning algorithms for cattle disease prediction, live price valuations, and advisory workflows."
            ],
            imageKey: "gitamProjectLead", // References images.gitamProjectLead
            credentialLabel: "View Capstone Award Certificate"
        },
        {
            role: "Artificial Intelligence Intern (Team Lead)",
            organization: "Infosys Springboard",
            location: "Remote, India",
            duration: "October 2025 - December 2025",
            description: "Selected as Team Lead during an intensive internship focused on AI applications and Agile Technical Project Management.",
            bullets: [
                "Coordinated task allocation, code integrations, and sprint checkpoints for a team of interns.",
                "Learned and put to practice SDLC frameworks and agile methodologies using Kanban boards.",
                "Contributed to building 'HeartShield', an AI-based early heart disease risk predictor utilizing OCR and analytical datasets."
            ],
            imageKey: "infosysIntern", // References images.infosysIntern
            credentialLabel: "View Internship Certificate"
        },
        {
            role: "Campus Ambassador",
            organization: "RineX",
            location: "Bengaluru, India",
            duration: "December 2022 - January 2023",
            description: "Represented the educational platform to coordinate and lead technical workshops for university students.",
            bullets: [
                "Facilitated campus relations and organized academic engagement seminars regarding emerging tech stacks.",
                "Refined foundational technical project management, stakeholder presentation, and organizational leadership capabilities."
            ],
            imageKey: "rinexAmbassador", // References images.rinexAmbassador
            credentialLabel: "View Ambassador Certificate"
        }
    ],

    // Combined Projects & Certifications Grid Data
    projectsAndCerts: [
        {
            id: "college-event-automation",
            title: "College Event Automation & Management System",
            issuerOrTech: "ServiceNow, Flow Designer, PDF Exports",
            date: "2026",
            type: "project",
            categories: ["servicenow", "pm"], // Highlights PM focus
            imageKey: "eventAutomation", // ServiceNow theme
            description: "A full-cycle event management application designed on ServiceNow, streamlining proposals, approvals, budgeting, and execution.",
            bullets: [
                "Built multi-level approval workflows using ServiceNow Flow Designer routed to faculty and finance managers.",
                "Programmed conflict detection script logic to prevent overlapping venues and automatically assign student volunteers.",
                "Integrated automated certificate generation, PDF exports, and bulk email notifications for event registrants."
            ],
            isHighlighted: true // Adds extra glowing border in UI
        },
        {
            id: "adaptively-ai-learning",
            title: "Adaptively — Accessible AI Learning Platform",
            issuerOrTech: "Google Gemini API, MediaPipe, Firebase, Angular",
            date: "2025",
            type: "project",
            categories: ["ai-ml", "pm"], // Crossover project
            imageKey: "adaptivelyPlatform",
            description: "An AI-powered learning environment designed specifically for visually and hearing-impaired students.",
            bullets: [
                "Integrated real-time voice-guided navigation and camera-based sign-language gesture recognition using MediaPipe.",
                "Structured reinforcement learning personalization matrices for adaptive user learning pathways.",
                "Connected Gemini API to automatically transcribe, summarize, and convert learning text to speech structures."
            ],
            isHighlighted: true
        },
        {
            id: "servicenow-cad",
            title: "Certified Application Developer (CAD)",
            issuerOrTech: "ServiceNow Professional Certification",
            date: "2025",
            type: "certification",
            categories: ["servicenow", "certs"],
            imageKey: "servicenowCad",
            description: "Credential validating competency in designing, constructing, scripting, and deploying applications on the ServiceNow Platform.",
            bullets: [
                "Application scoping, tables design, Access Control Lists (ACLs), and application inheritance rules.",
                "Form customization, Client Scripts, UI Policies, Business Rules, and Script Includes scripting.",
                "Service Portal widget configurations and Flow Designer flow configurations."
            ],
            isHighlighted: false
        },
        {
            id: "servicenow-csa",
            title: "Certified System Administrator (CSA)",
            issuerOrTech: "ServiceNow Professional Certification",
            date: "2025",
            type: "certification",
            categories: ["servicenow", "certs"],
            imageKey: "servicenowCsa",
            description: "Credential validating capabilities in configuring, administering, and supporting the ServiceNow Platform.",
            bullets: [
                "User administration, role setups, list personalization, and form configurations.",
                "Service Catalog, Request Fulfillment pathways, SLA management, and Service Portals.",
                "Database schema, Import Sets, Update Sets deployment, and platform reporting tools."
            ],
            isHighlighted: false
        },
        {
            id: "taskmate-dashboard",
            title: "TaskMate — Agile Productivity Dashboard",
            issuerOrTech: "React.js, Node.js, MongoDB, Firebase",
            date: "2025",
            type: "project",
            categories: ["pm"], // PM highlight
            imageKey: "taskmateDashboard",
            description: "A team collaboration dashboard for task creation, priority weight assignment, and milestone tracking.",
            bullets: [
                "Designed and built interactive boards with drag-and-drop workflow lanes and priority matrix indicators.",
                "Programmed automated reminders, deadline tracking, and email alerts via a RESTful Node.js backend.",
                "Established Role-Based Access Control (RBAC) to support cross-functional Technical Project Management."
            ],
            isHighlighted: false
        },
        {
            id: "great-learn-pm",
            title: "Project Management Certification",
            issuerOrTech: "Great Learning Certification",
            date: "2026",
            type: "certification",
            categories: ["pm", "certs"],
            imageKey: "greatLearnPm",
            description: "Professional credential detailing key concepts in Technical Project Management, agile management, budgeting, and scoping.",
            bullets: [
                "Core learning in Scope Management, Work Breakdown Structures (WBS), and Critical Path Method (CPM).",
                "Deep dive into agile frameworks, sprint management, user story definitions, and risk mitigation.",
                "Best practices in communication plans and alignment strategies for cross-functional developers."
            ],
            isHighlighted: true
        },
        {
            id: "cyhack-threat-detection",
            title: "Cyhack — AI Threat Anomaly Detector",
            issuerOrTech: "Python, Machine Learning, Threat Analysis",
            date: "2024",
            type: "project",
            categories: ["ai-ml"],
            imageKey: "cyhackSecurity", // fallback
            description: "A distributed system for monitoring network packets and triggering threat flags based on anomalous indicators.",
            bullets: [
                "Engineered statistical anomaly engines utilizing historical packet flow datasets to flag suspicious signatures.",
                "Reduced event detection response times by 35% by implementing stream processing architectures."
            ],
            isHighlighted: false
        },
        {
            id: "deepvision-captioning",
            title: "DeepVision — Neural Video Captioner",
            issuerOrTech: "Python, PyTorch, ResNet CNN, LSTM",
            date: "2024",
            type: "project",
            categories: ["ai-ml"],
            imageKey: "deepvisionAi", // fallback
            description: "A deep learning neural network that generates real-time natural language descriptions for video frames.",
            bullets: [
                "Utilized ResNet CNN models for visual feature extraction and LSTM networks for sequence modeling text generation.",
                "Attained 92% classification accuracy on benchmark datasets for event detection and frame captioning.",
                "Programmed parallel data augmentation preprocessing pipelines to optimize network training runs."
            ],
            isHighlighted: false
        },
        {
            id: "google-solution-h2k",
            title: "Google GDSC Solution Challenge (H2K)",
            issuerOrTech: "Google Developer Student Clubs",
            date: "2024",
            type: "certification",
            categories: ["ai-ml", "certs"],
            imageKey: "googleH2k",
            description: "Certificate of recognition for solving social issues using Google Cloud Platform infrastructure and machine learning.",
            bullets: [
                "Engineered ML model backends mapped to sustainable development target objectives.",
                "Designed cloud architecture frameworks with Firestore database feeds for live inference logs."
            ],
            isHighlighted: false
        }
    ]
};

// ==========================================================================
// 2. TIMELINE AND GRID RENDER ENGINE
// ==========================================================================

// Render the experience timeline
function renderTimeline() {
    const timelineContainer = document.getElementById("experience-timeline");
    if (!timelineContainer) return;

    timelineContainer.innerHTML = "";

    PORTFOLIO_CONFIG.experience.forEach((exp, index) => {
        const sideClass = index % 2 === 0 ? "left-item" : "right-item";
        
        // Build bullet points
        const bulletsHtml = exp.bullets.map(b => `<li>${b}</li>`).join("");
        
        // Image path setup
        const imageFile = PORTFOLIO_CONFIG.images[exp.imageKey];
        
        // Cert link and inline certificate preview image if image exists
        const certLinkHtml = imageFile ? `
            <div class="timeline-cert-preview" data-img="${imageFile}" data-title="${exp.role} - ${exp.organization}" data-desc="${exp.description}">
                <img src="${imageFile}" alt="${exp.role} Certificate" loading="lazy">
                <div class="cert-hover-icon">
                    <div class="cert-preview-icon-box">
                        <i data-lucide="maximize-2"></i>
                    </div>
                </div>
            </div>
            <div class="timeline-cert-link" data-img="${imageFile}" data-title="${exp.role} - ${exp.organization}" data-desc="${exp.description}" style="margin-top: 8px;">
                <i data-lucide="award"></i>
                <span>${exp.credentialLabel || 'View Verification Document'}</span>
            </div>
        ` : '';

        const itemHtml = `
            <div class="timeline-item ${sideClass}">
                <div class="timeline-content">
                    <span class="timeline-date">${exp.duration}</span>
                    <h3 class="timeline-role">${exp.role}</h3>
                    <div class="timeline-org">
                        <i data-lucide="building-2"></i>
                        <span>${exp.organization}</span>
                        ${exp.location ? `<span class="timeline-loc">| ${exp.location}</span>` : ''}
                    </div>
                    <p class="timeline-desc">${exp.description}</p>
                    <ul class="timeline-bullets">
                        ${bulletsHtml}
                    </ul>
                    ${certLinkHtml}
                </div>
            </div>
        `;
        
        timelineContainer.insertAdjacentHTML("beforeend", itemHtml);
    });
}

// Render projects and certifications grid
function renderProjects(filter = "all") {
    const gridContainer = document.getElementById("projects-grid");
    if (!gridContainer) return;

    gridContainer.innerHTML = "";

    // Filter list
    const filteredItems = PORTFOLIO_CONFIG.projectsAndCerts.filter(item => {
        if (filter === "all") return true;
        return item.categories.includes(filter);
    });

    filteredItems.forEach(item => {
        // Build bullet points
        const bulletsHtml = item.bullets.map(b => `<li>${b}</li>`).join("");
        
        // Fetch image path
        const imageFile = PORTFOLIO_CONFIG.images[item.imageKey] || "great learn pm.jpg";
        
        // Highlight class
        const highlightClass = item.isHighlighted ? "pm-highlight-card" : "";
        const tagLabel = item.type === "project" ? "Project" : "Credential";

        // Action links based on type
        const actionHtml = item.type === "certification" ? `
            <div class="project-action-link view-cert-trigger" data-img="${imageFile}" data-title="${item.title}" data-desc="${item.description}">
                <span>View Certificate</span>
                <i data-lucide="maximize-2"></i>
            </div>
        ` : `
            <div class="project-action-link view-project-trigger" data-img="${imageFile}" data-title="${item.title}" data-desc="${item.description}">
                <span>Details & Proof</span>
                <i data-lucide="eye"></i>
            </div>
        `;

        // Tech pills
        const tagsHtml = item.issuerOrTech.split(",").map(tech => `
            <span class="project-tag-badge">${tech.trim()}</span>
        `).join("");

        const itemHtml = `
            <article class="project-card glass-card ${highlightClass} fade-in" data-category="${item.categories.join(' ')}">
                <div class="project-card-image-box" data-img="${imageFile}" data-title="${item.title}" data-desc="${item.description}">
                    <span class="project-image-badge">${tagLabel}</span>
                    <img src="${imageFile}" alt="${item.title}" loading="lazy">
                    <div class="img-hover-overlay">
                        <div class="view-icon-box">
                            <i data-lucide="maximize-2"></i>
                        </div>
                    </div>
                </div>
                <div class="project-card-content">
                    <div class="project-card-tags">
                        ${tagsHtml}
                    </div>
                    <h3 class="project-card-title">${item.title}</h3>
                    <p class="project-card-desc">${item.description}</p>
                    <ul class="project-card-bullets">
                        ${bulletsHtml}
                    </ul>
                    <div class="project-card-footer">
                        <span class="project-meta-date">${item.date}</span>
                        ${actionHtml}
                    </div>
                </div>
            </article>
        `;

        gridContainer.insertAdjacentHTML("beforeend", itemHtml);
    });

    // Re-initialize dynamic Lucide icons inside cards
    lucide.createIcons();
    setupCardModalEvents();
}

// Setup Modal Event Listeners on newly rendered cards
function setupCardModalEvents() {
    // Click on project image box
    document.querySelectorAll(".project-card-image-box").forEach(box => {
        box.addEventListener("click", () => {
            const img = box.getAttribute("data-img");
            const title = box.getAttribute("data-title");
            const desc = box.getAttribute("data-desc");
            openLightbox(img, title, desc);
        });
    });

    // Click on action links
    document.querySelectorAll(".view-cert-trigger, .view-project-trigger").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation(); // Avoid double triggering parent click
            const img = btn.getAttribute("data-img");
            const title = btn.getAttribute("data-title");
            const desc = btn.getAttribute("data-desc");
            openLightbox(img, title, desc);
        });
    });
}

// Setup experience timeline certificate triggers
function setupTimelineEvents() {
    document.addEventListener("click", function(e) {
        const trigger = e.target.closest(".timeline-cert-link, .timeline-cert-preview");
        if (trigger) {
            const img = trigger.getAttribute("data-img");
            const title = trigger.getAttribute("data-title");
            const desc = trigger.getAttribute("data-desc");
            openLightbox(img, title, desc);
        }
    });
}

// ==========================================================================
// 3. INTERACTIVE LIGHTBOX MODAL
// ==========================================================================

function openLightbox(imgSrc, title, desc) {
    const modal = document.getElementById("lightbox-modal");
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-description");
    
    if (!modal || !modalImg) return;

    modalImg.src = imgSrc;
    modalImg.alt = title;
    modalTitle.textContent = title;
    
    // Fetch detail points or map customized text inside modal description
    const matchedItem = PORTFOLIO_CONFIG.projectsAndCerts.find(item => item.title === title) 
                       || PORTFOLIO_CONFIG.experience.find(exp => `${exp.role} - ${exp.organization}` === title);
                       
    if (matchedItem && matchedItem.bullets) {
        const bulletList = matchedItem.bullets.map(b => `<li>${b}</li>`).join("");
        modalDesc.innerHTML = `<p style="margin-bottom: 12px;">${desc}</p>
                               <h4 style="font-family:var(--font-heading);font-weight:700;font-size:0.9rem;margin-bottom:6px;color:var(--primary)">Key Accomplishments:</h4>
                               <ul style="padding-left: 20px; font-size: 0.85rem; line-height: 1.5; color: var(--text-secondary); list-style-type: circle;">${bulletList}</ul>`;
    } else {
        modalDesc.textContent = desc;
    }

    modal.classList.add("open");
    document.body.style.overflow = "hidden"; // Prevent background scroll
}

function closeLightbox() {
    const modal = document.getElementById("lightbox-modal");
    if (!modal) return;
    
    modal.classList.remove("open");
    document.body.style.overflow = ""; // Re-enable scroll
}

function setupLightboxEvents() {
    const modal = document.getElementById("lightbox-modal");
    const closeBtn = document.querySelector(".modal-close-btn");
    const bgClose = document.querySelector(".modal-bg-close");
    
    if (!modal) return;

    // Close button click
    if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
    // Backdrop click
    if (bgClose) bgClose.addEventListener("click", closeLightbox);
    
    // Escape key press
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("open")) {
            closeLightbox();
        }
    });
}

// ==========================================================================
// 4. THEME TOGGLE CONTROLLER (DARK / LIGHT)
// ==========================================================================

function setupThemeController() {
    const themeBtn = document.getElementById("theme-toggle-btn");
    if (!themeBtn) return;

    // Check saved theme or system preference
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    
    let activeTheme = "dark"; // Default
    if (savedTheme) {
        activeTheme = savedTheme;
    } else if (systemPrefersLight) {
        activeTheme = "light";
    }

    // Apply theme function
    const applyTheme = (theme) => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
        activeTheme = theme;
    };

    // Apply initially
    applyTheme(activeTheme);

    // Click handler
    themeBtn.addEventListener("click", () => {
        const nextTheme = activeTheme === "dark" ? "light" : "dark";
        applyTheme(nextTheme);
    });
}

// ==========================================================================
// 5. INTERACTIVE COMPONENT BEHAVIORS (TABS, SCROLL, COPY, TYPING)
// ==========================================================================

// Typing animation for subtitle
function initTypingAnimation() {
    const typedTextSpan = document.getElementById("typed-text");
    if (!typedTextSpan) return;

    const titles = [
        "Technical Project Management",
        "Agile Project Lead",
        "Scrum Master & Technical Project Management",
        "ServiceNow Developer (CAD & CSA)",
        "AI/ML Solution Architect"
    ];
    
    const typingSpeed = 100;
    const erasingSpeed = 60;
    const newTextDelay = 2000; // Delay between titles
    let titleIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < titles[titleIndex].length) {
            typedTextSpan.textContent += titles[titleIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = titles[titleIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            titleIndex = (titleIndex + 1) % titles.length;
            setTimeout(type, typingSpeed + 500);
        }
    }

    // Start typewriter loop
    setTimeout(type, 1000);
}

// Project filtering tabs interaction
function setupFilterTabs() {
    const tabs = document.querySelectorAll(".filter-tab");
    
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const currentActive = document.querySelector(".filter-tab.active");
            if (currentActive) currentActive.classList.remove("active");
            
            tab.classList.add("active");
            
            const filterValue = tab.getAttribute("data-filter");
            
            // Grid cards animations
            const cards = document.querySelectorAll(".project-card");
            
            cards.forEach(card => {
                card.classList.add("fade-out");
                card.classList.remove("fade-in");
            });

            // Smooth content swaps
            setTimeout(() => {
                renderProjects(filterValue);
            }, 250);
        });
    });
}

// Scroll indicators (Sticky nav, back-to-top, scroll active links)
function setupScrollEvents() {
    const header = document.getElementById("main-header");
    const scrollTopBtn = document.getElementById("scroll-top-btn");
    const navItems = document.querySelectorAll(".nav-item");
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
        const scrollPos = window.scrollY;

        // Sticky nav shadow
        if (scrollPos > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

        // Show back to top button
        if (scrollPos > 400) {
            scrollTopBtn.classList.remove("hidden");
        } else {
            scrollTopBtn.classList.add("hidden");
        }
    });

    // Scroll to top action
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Active Section Observer for Nav links
    const observerOptions = {
        root: null,
        rootMargin: "-20% 0px -60% 0px", // triggers when section is in middle of viewport
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");
                
                navItems.forEach(item => {
                    item.classList.remove("active");
                    if (item.getAttribute("href") === `#${id}`) {
                        item.classList.add("active");
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(sec => observer.observe(sec));
}

// Mobile Dropdown Actions
function setupMobileNav() {
    const menuBtn = document.getElementById("mobile-menu-btn");
    const dropdown = document.getElementById("mobile-dropdown");
    const dropdownItems = document.querySelectorAll(".mobile-nav-item");

    if (!menuBtn || !dropdown) return;

    menuBtn.addEventListener("click", () => {
        dropdown.classList.toggle("open");
    });

    // Close when clicking an item
    dropdownItems.forEach(item => {
        item.addEventListener("click", () => {
            dropdown.classList.remove("open");
        });
    });

    // Close when window resized past mobile breakpoint
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768 && dropdown.classList.contains("open")) {
            dropdown.classList.remove("open");
        }
    });
}

// Copy contact value to clipboard
function setupClipboardCopy() {
    const copyCards = document.querySelectorAll(".copyable-card");
    const toast = document.getElementById("clipboard-toast");

    copyCards.forEach(card => {
        card.addEventListener("click", () => {
            const textToCopy = card.getAttribute("data-copy");
            
            navigator.clipboard.writeText(textToCopy).then(() => {
                // Show toast
                toast.classList.remove("hidden");
                
                setTimeout(() => {
                    toast.classList.add("hidden");
                }, 2000);
            }).catch(err => {
                console.error("Failed to copy text: ", err);
            });
        });
    });
}

// Forms submit handler
function setupFormHandler() {
    const form = document.getElementById("portfolio-contact-form");
    if (!form) return;

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        
        const submitBtn = form.querySelector(".submit-btn");
        const btnText = submitBtn.querySelector("span");
        const originalText = btnText.textContent;
        
        btnText.textContent = "Sending...";
        submitBtn.style.opacity = "0.7";
        submitBtn.disabled = true;

        const formData = new FormData(form);
        const url = form.getAttribute("action");

        fetch(url, {
            method: "POST",
            mode: "no-cors",
            body: formData
        })
        .then(() => {
            btnText.textContent = "Message Sent!";
            submitBtn.style.background = "linear-gradient(135deg, #10b981, #059669)";
            submitBtn.style.opacity = "1";
            
            // Show success toast
            const toast = document.getElementById("clipboard-toast");
            if (toast) {
                toast.textContent = "Response recorded successfully!";
                toast.classList.remove("hidden");
                setTimeout(() => {
                    toast.classList.add("hidden");
                }, 3000);
            }
            
            form.reset();
            setTimeout(() => {
                btnText.textContent = originalText;
                submitBtn.style.background = "";
                submitBtn.disabled = false;
            }, 3000);
        })
        .catch(err => {
            console.error("Error submitting form:", err);
            btnText.textContent = "Error Sending";
            submitBtn.style.background = "linear-gradient(135deg, #ef4444, #dc2626)";
            
            setTimeout(() => {
                btnText.textContent = originalText;
                submitBtn.style.background = "";
                submitBtn.disabled = false;
            }, 3000);
        });
    });
}

// ==========================================================================
// 6. INITIALIZATION TRIGGER
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Lucide vector graphics icons
    lucide.createIcons();
    
    // 2. Render dynamic content blocks
    renderTimeline();
    renderProjects("pm");
    
    // 3. Initialize events and controllers
    setupThemeController();
    setupLightboxEvents();
    setupTimelineEvents();
    setupFilterTabs();
    setupScrollEvents();
    setupMobileNav();
    setupClipboardCopy();
    setupFormHandler();
    
    // 4. Trigger animations
    initTypingAnimation();
});

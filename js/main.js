
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();

const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
}

themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    
    if (isDark) {
        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    }
});

// Navbar dynamique au scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Bouton back-to-top
const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Onglets du programme
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        tabBtns.forEach((b) => b.classList.remove("active"));
        tabContents.forEach((c) => c.classList.remove("active"));

        btn.classList.add("active");

        const jour = btn.getAttribute("data-jour");
        const targetContent = document.getElementById("jour-" + jour);
        targetContent.classList.add("active");
    });
});


const counters = document.querySelectorAll('.stat-number');

  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counterElement = entry.target;
          const target = parseInt(counterElement.dataset.target, 10); 
          let current = 0;
          const increment = target / 100; 

          const updateCounter = () => {
            current += increment;
            if (current < target) {
              counterElement.textContent = Math.floor(current);
              requestAnimationFrame(updateCounter); 
            } else {
              counterElement.textContent = target;
            }
          };

          updateCounter();
          counterObserver.unobserve(counterElement);
        }
      });
    });

    counters.forEach(counter => { counterObserver.observe(counter); });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const speakerCards = document.querySelectorAll('.speaker-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
           
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            speakerCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (filterValue === 'tous' || filterValue === cardCategory) {
                    card.style.display = 'block'; 
                } else {
                    card.style.display = 'none';  
                }
            });
        });
    });
});

// Validation nom complet
if (fullname.value.trim() === "") {
    fullname.nextElementSibling.textContent = "Le nom complet est obligatoire";
    fullname.style.borderColor = "red";
    isValid = false;
} else {
    fullname.nextElementSibling.textContent = "";
    fullname.style.borderColor = "green";
}

// Validation du formulaire
const form = document.getElementById("registration-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const fullname = document.getElementById("fullname");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const participation = document.getElementById("participation");
    const country = document.getElementById("country");
    const message = document.getElementById("message");

    let isValid = true;

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        email.nextElementSibling.textContent = "Email invalide";
        email.style.borderColor = "red";
        isValid = false;
    } else {
        email.nextElementSibling.textContent = "";
        email.style.borderColor = "green";
    }

if (message.value.trim().length < 20) {
    message.nextElementSibling.textContent = "Le message doit contenir au moins 20 caractères";
    message.style.borderColor = "red";
    isValid = false;
} else {
    message.nextElementSibling.textContent = "";
    message.style.borderColor = "green";
}

const phoneDigits = phone.value.replace(/\D/g, "");
if (phoneDigits.length < 8) {
    phone.nextElementSibling.textContent = "Le téléphone doit contenir au moins 8 chiffres";
    phone.style.borderColor = "red";
    isValid = false;
} else {
    phone.nextElementSibling.textContent = "";
    phone.style.borderColor = "green";
}

if (participation.value === "") {
    participation.nextElementSibling.textContent = "Veuillez choisir un type de participation";
    participation.style.borderColor = "red";
    isValid = false;
} else {
    participation.nextElementSibling.textContent = "";
    participation.style.borderColor = "green";
}
    if (isValid) {
        const successMessage = document.getElementById("success-message");
        successMessage.textContent = "Votre inscription a bien été envoyée !";
        successMessage.style.display = "block";
        
        form.reset();
        
        setTimeout(() => {
            successMessage.style.display = "none";
        }, 5000);
    }
});


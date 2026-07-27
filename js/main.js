
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
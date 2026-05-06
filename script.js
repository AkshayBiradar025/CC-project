// Live Clock
setInterval(() => {
    let now = new Date();
    document.getElementById("clock").innerText = now.toLocaleTimeString();
}, 1000);

// Theme Toggle
function toggleTheme() {
    document.body.classList.toggle("dark");
}
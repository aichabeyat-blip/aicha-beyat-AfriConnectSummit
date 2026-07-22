//dark et light mode
const themeBtn = document.getElementById("theme");
const icon = themeBtn.querySelector("i");

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    
    if (savedTheme === "dark") {
        icon.classList.replace("fa-moon", "fa-sun");
    }
}
themeBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");

    if (currentTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        icon.classList.replace("fa-sun", "fa-moon");
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        icon.classList.replace("fa-moon","fa-sun");
    }

});
// scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () =>{
    if (window.scrollY > 80){
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled")
    }
});
//menu hamburger
const hamburger = document.querySelector(".humberger");
const navLinks = document.querySelector(".nav");

hamburger.addEventListener("click", () =>{

    navLinks.classList.toggle("active");
});
//fade-in slide-in zoom-in
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver ((entries) => {
    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }
    });
},{
    threshold:0.2
});
reveals.forEach(element =>{
    observer.observe(element);
})

const mobileMenu = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-links");

const questions = document.querySelectorAll(".question");

mobileMenu.addEventListener("click", function(){
    navLinks.classList.toggle("active");
});

questions.forEach(question => {
    question.addEventListener("click", function(){
        this.classList.toggle("active");
    });
});
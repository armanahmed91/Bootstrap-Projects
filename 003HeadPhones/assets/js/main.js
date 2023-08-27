// Navbar Scroll On
let navBar = document.querySelector('.navbar');
window.onscroll = () =>{
    if(document.documentElement.scrollTop > 20){
        navBar.classList.add('scroll-on');
    }
    else{
        navBar.classList.remove('scroll-on');
    }
}

// Hide Navbar

let navLinks = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navLinks.forEach((a) => {
    a.addEventListener("click", () =>{
        navCollapse.classList.remove('show');
    })
})
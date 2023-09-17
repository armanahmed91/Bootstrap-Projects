// Header Scroll

let navBar = document.querySelector('.navbar');
window.onscroll = ()=>{
    if(document.documentElement.scrollTop > 20){
        navBar.classList.add('header-scrolled');
    }
    else{
        navBar.classList.remove('header-scrolled');
    }
}

// Nav Hide

let navLink = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navLink.forEach((a)=>{
    a.addEventListener("click",()=>{
        navCollapse.classList.remove("show");
    })
})
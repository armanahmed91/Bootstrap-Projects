// Header Scroll
let navBar = document.querySelector(".navbar");
window.onscroll = ()=>{
    if(document.documentElement.scrollTop > 20){
        navBar.classList.add("header-scrolled");
    }
    else{
        navBar.classList.remove("header-scrolled");
    }
}

// Hide Nav

let navLink = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".collapse");
navLink.forEach((a)=>{
    a.addEventListener("click", ()=>{
        navCollapse.classList.remove("show");
    })
})

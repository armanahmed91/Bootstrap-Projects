// Navbar Scroll

let navBar = document.querySelector(".navbar");
window.onscroll = function (){
    if(document.documentElement.scrollTop > 20){
        navBar.classList.add("scroll-on");
    }
    else{
        navBar.classList.remove("scroll-on");
    }
}

// Navbar hide

let navItem = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navItem.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})
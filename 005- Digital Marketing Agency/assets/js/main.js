// Scroll
let navBar = document.querySelector(".navbar");
window.onscroll = ()=>{
    if(document.documentElement.scrollTop > 20){
        navBar.classList.add("header-scrolled");
    }
    else{
        navBar.classList.remove("header-scrolled");
    }
}

// Nav Hide

let navLink = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navLink.forEach((a)=>{
    a.addEventListener("click", () =>{
        navCollapse.classList.remove('show');
    })
})

// Owl Carousel
$(document).ready(function() {
    $(".client-slider-section").owlCarousel({
        items: 4,
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });
});
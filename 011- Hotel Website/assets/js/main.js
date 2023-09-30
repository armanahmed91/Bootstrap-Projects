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


// Swiper Slider
var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    loop: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3500,
    },
});


// Counter

document.addEventListener("DOMContentLoaded", ()=>{
    function counter(id, start, end, duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start? 1: -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() =>{
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        }, step);

    }
    counter("count1", 0, 1287, 3000);
    counter("count2", 4100, 5786, 2500);
    counter("count3", 0, 1440, 3000);
    counter("count4", 5500, 7110, 3000);
})

// Partner

var swiper = new Swiper(".partner", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        '991': {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        '767': {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        '320': {
            slidesPerView: 2,
            spaceBetween: 8,
        },


    },
});
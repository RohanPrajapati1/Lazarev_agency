function navAnimation(){
    let nav = document.querySelector("nav");


nav.addEventListener("mouseenter" , function() {
    let tl = gsap.timeline();

    tl.to("#bottom-nav" , {
        height:"200%"
    })
    tl.to(".nav-option h5" , {
        display: "block"
    })
    tl.from(".nav-option h5 span" , {
        y:25,
        // duration:0.2,
        stagger:{
            amount:0.6
        }
    })
})

nav.addEventListener("mouseleave" , function() {
    let tl = gsap.timeline();
    tl.to(".nav-option h5 span" , {
        y:25,
        // duration:0.2,
        stagger:{
            amount:0.6
        }
    })
    tl.to(".nav-option h5" , {
        display: "none",
        duration:0.1
    })
    tl.to("#bottom-nav" , {
        height:0,
        duration:0.1
    })
})
}

navAnimation();
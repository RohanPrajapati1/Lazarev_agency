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


function page2_Animation(){    
let right_element = document.querySelectorAll(".page2-right-text");
right_element.forEach(function(e){
     e.addEventListener("mouseenter", ()=>{
        gsap.to(e.childNodes[3],{
            opacity:1,
            scale:1
        })
     })
     e.addEventListener("mouseleave", ()=>{
        gsap.to(e.childNodes[3],{
            opacity:0,
            scale:0
        })
     })
     e.addEventListener("mousemove", (deatails)=>{
        gsap.to(e.childNodes[3],{
            x:deatails.x - e.getBoundingClientRect().x - 380,
            y:deatails.y - e.getBoundingClientRect().y -55
        })
        
     })
})
}
page2_Animation();
function navAnimation(){
    let nav = document.querySelector("nav");


nav.addEventListener("mouseenter" , function() {
    let tl = gsap.timeline();

    tl.to("#bottom-nav" , {
        height:"200%",
        duration:0.5
    })
    tl.to(".nav-option h5" , {
        display: "block",
        duration:0.1
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

function videoAnimation(){
let video_btn = document.querySelector(".video-btn");
let video = document.querySelector(".page3 video");

video_btn.addEventListener("click" , ()=>{
    video.play();
    gsap.to(video , {
        transform:"scaleX(1) scaleY(1)",
        opacity:1,
        borderRadius:0
    })
})
video.addEventListener("click" , ()=> {
    video.pause();
    gsap.to(video , {
        transform:"scaleX(0.7) scaleY(0) ",
        opacity:0,
        borderRadius:"30px"
    })
})
}

function page5_video_animation(){    
    let page4 = document.querySelectorAll(".right-sec");
    // console.log(page4[0].childNodes);
    page4.forEach((elem)=>{
        //  console.log(elem);
         elem.addEventListener("mouseenter",()=>{
            // console.log(elem.childNodes[3]);
            elem.childNodes[5].play();
            elem.childNodes[5].style.opacity = 1;
            
         })
         elem.addEventListener("mouseleave",()=>{
            // console.log(elem.childNodes[3]);
            elem.childNodes[5].load();
            elem.childNodes[5].style.opacity = 0;
            elem.childNodes[1].style.opacity = 0;
            
         })
         elem.addEventListener("mousemove", (deatails)=>{
            elem.childNodes[1].style.opacity = 1;
            gsap.to(elem.childNodes[1],{                
                x:deatails.x - elem.getBoundingClientRect().x - 70,
                y:deatails.y - elem.getBoundingClientRect().y -70
            })
            
         })
    })
}

// page2_Animation();
// navAnimation();
// videoAnimation();
page5_video_animation();



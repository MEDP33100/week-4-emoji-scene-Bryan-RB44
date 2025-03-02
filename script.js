document.addEventListener("DOMContentLoaded", (event) => {
    
    //Animation for the train
    gsap.from('.trainMove', {
        duration: 3,
        repeat: -1,
        ease: "bounce",
        x: -20,
        yoyo: true
    });
});

//Debugging
console.log(document.querySelector('.trainMove'));

const train = document.querySelector(".train");

document.addEventListener("DOMContentLoaded", (event) => {
    
    //Animation for the train
    gsap.to(train, {
        duration: 3,
        repeat: -1,
        ease: "bounce",
        x: -20,
        yoyo: true
    })
});
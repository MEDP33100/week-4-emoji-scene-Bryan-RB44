document.addEventListener("DOMContentLoaded", (event) => {
    //Animation for the train
    gsap.from('#train', {
        duration: 3,
        repeat: -1,
        ease: "bounce",
        x: -20,
        yoyo: true,
    });
});
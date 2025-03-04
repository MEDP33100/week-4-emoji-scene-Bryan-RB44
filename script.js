document.addEventListener("DOMContentLoaded", (event) => {
    
    //Animation for the train
    gsap.to('.trainThing', {
        duration: 15,
        repeat: -1,
        x: 150,
        yoyo: true,
    });

    gsap.fromTo(".mountainThing", 
        { x: -100 },
        { x: "100vw", duration: 5, repeat: -1, ease: "linear" }
    );

    gsap.fromTo(".cloudThing", 
        { opacity: 0, x: 0 },
        { opacity: 1, x: "100vw", duration: 10, repeat: -1, ease: "linear" }
    );

    gsap.fromTo(".treeThing", 
        { x: -100 },
        { x: "100vw", duration: 4, repeat: -1, ease: "linear" }
    );

    gsap.fromTo(".grassThing", 
        { x: -100 },
        { x: "100vw", duration: 4.5, repeat: -1, ease: "linear" }
    );
});

//Debugging
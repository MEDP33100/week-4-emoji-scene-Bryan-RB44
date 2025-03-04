document.addEventListener("DOMContentLoaded", (event) => {
    
    //Animation for the train
    gsap.to('.trainThing', {
        duration: 15,
        repeat: -1,
        x: 150,
        yoyo: true,
    });

    //Animation for the mountain
    gsap.fromTo(".mountainThing", 
        { x: -100 },
        { x: "100vw", duration: 5, repeat: -1, ease: "linear" }
    );

    //Animation for the cloud
    gsap.fromTo(".cloudThing", 
        { opacity: 0, x: 0 },
        { opacity: 1, x: "100vw", duration: 10, repeat: -1, ease: "none" }
    );

    //Animation for the trees
    gsap.fromTo(".treeThing", 
        { x: -200 },
        { x: "100vw", duration: 4, repeat: -1, ease: "linear" }
    );

    //Animation for the grass
    gsap.fromTo(".grassThing", 
        { x: -100 },
        { x: "100vw", duration: 4.5, repeat: -1, ease: "linear" }
    );

    //Animation for several clouds
    const nubeBox = document.body;
    for (let i = 0; i < 4; i++) {
        const nube = document.createElement("p");
        nube.className = "cloudThing";
        nube.textContent = "☁️";
        nube.style.position = "absolute";
        //NOTE: "$" allows math expressions inside strings.
        //Math.random() chooses a number between 0 and 1, the rest is self explanatory.
        nube.style.top = `${Math.random() * 15}vh`;
        nube.style.left = `${Math.random() * 5}vw`;
        nubeBox.appendChild(nube);

        gsap.fromTo(nube,
            { opacity: 0, x: -200 },
            { opacity: 1, x: "100vw", duration: 5 + Math.random() * 5, repeat: -1, ease: "none" }
        );
    }

    //Animation for grassy patches
    const grassPatch = document.body;
    for (let i = 0; i < 8; i++) {
        const grass = document.createElement("p");
        grass.className = "grassThing";
        grass.textContent = "🌿";
        grass.style.position = "absolute";
        grass.style.bottom = "0";
        grass.style.left = `${Math.random() * -5}vw`;
        grassPatch.appendChild(grass);

        gsap.fromTo(grass,
            { x: -100 },
            { x: "100vw", duration: 4.5, repeat: -1, ease: "linear" }
        );
    }
});
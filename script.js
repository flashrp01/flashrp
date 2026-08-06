const enterScreen = document.getElementById("enter-screen");

function enterSite() {
    if (!enterScreen || enterScreen.classList.contains("hidden")) return;

    enterScreen.classList.add("hidden");
    document.body.classList.remove("locked");
    document.body.classList.add("entered");
}

enterScreen?.addEventListener("click", enterSite);
enterScreen?.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        enterSite();
    }
});

tsParticles.load("particles", {
    fullScreen: { enable: false },
    fpsLimit: 60,
    particles: {
        number: { value: 80 },
        color: { value: "#ff0000" },
        links: {
            enable: true,
            color: "#ff0000",
            distance: 150,
            opacity: 0.2
        },
        move: {
            enable: true,
            speed: 1,
            outModes: { default: "bounce" }
        },
        opacity: { value: 0.4 },
        size: { value: { min: 1, max: 3 } }
    },
    interactivity: {
        events: {
            onHover: { enable: true, mode: "grab" },
            resize: true
        },
        modes: { grab: { distance: 140 } }
    }
});

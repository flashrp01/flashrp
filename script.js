const enterScreen = document.getElementById("enter-screen");
const spotifyFrame = document.querySelector(".spotify-player iframe");
const card = document.querySelector(".container");
const logo = document.querySelector(".logo");

function startSpotify() {
    if (!spotifyFrame || spotifyFrame.dataset.started === "true") return;

    const url = new URL(spotifyFrame.src);
    url.searchParams.set("autoplay", "1");
    spotifyFrame.src = url.toString();
    spotifyFrame.dataset.started = "true";
}

function enterSite() {
    if (!enterScreen || enterScreen.classList.contains("hidden")) return;

    // O clique libera a tentativa de reprodução automática no navegador.
    startSpotify();
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

// Movimento suave do painel e da logo seguindo o mouse.
if (card && logo && window.matchMedia("(pointer:fine)").matches) {
    card.addEventListener("mousemove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        const rotateY = x * 7;
        const rotateX = y * -7;

        card.style.setProperty("--rotate-x", `${rotateX}deg`);
        card.style.setProperty("--rotate-y", `${rotateY}deg`);
        card.style.setProperty("--glow-x", `${(x + 0.5) * 100}%`);
        card.style.setProperty("--glow-y", `${(y + 0.5) * 100}%`);

        logo.style.setProperty("--logo-x", `${x * 13}px`);
        logo.style.setProperty("--logo-y", `${y * 10}px`);
        logo.style.setProperty("--logo-rotate", `${x * 4}deg`);
    });

    card.addEventListener("mouseleave", () => {
        card.style.setProperty("--rotate-x", "0deg");
        card.style.setProperty("--rotate-y", "0deg");
        card.style.setProperty("--glow-x", "50%");
        card.style.setProperty("--glow-y", "50%");
        logo.style.setProperty("--logo-x", "0px");
        logo.style.setProperty("--logo-y", "0px");
        logo.style.setProperty("--logo-rotate", "0deg");
    });
}

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

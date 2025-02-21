document.addEventListener("DOMContentLoaded", () => {
    let audio = document.getElementById("bg-music");
    let playButton = document.getElementById("play-music");

    playButton.addEventListener("click", () => {
        audio.play().then(() => {
            playButton.style.display = "none"; // Hide button after playing
        }).catch(error => console.log("Autoplay blocked:", error));
    });
});

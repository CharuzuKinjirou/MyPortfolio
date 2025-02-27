/** 
document.addEventListener("DOMContentLoaded", () => {
    let audio = document.getElementById("bg-music");
    let playButton = document.getElementById("play-music");

    playButton.addEventListener("click", () => {
        audio.play().then(() => {
            playButton.style.display = "none"; // Hide button after playing
        }).catch(error => console.log("Autoplay blocked:", error));
    });
});


function showSection(sectionId) {
    document.querySelectorAll('.content').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("active");
}
*/

        function toggleMenu() {
            document.getElementById("mobileMenu").classList.toggle("active");
        }

        function navigateTo(index) {
            document.getElementById("mainContent").style.transform = `translateY(-${index * 100}vh)`;
        }

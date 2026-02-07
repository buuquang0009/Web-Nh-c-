const audio = document.getElementById("audioPlayer");
const title = document.getElementById("songTitle");
const disc = document.getElementById("disc");

function playSong(name, file) {
    title.innerText = name;
    audio.src = file;
    audio.play();
}

// Khi nhạc chạy → đĩa quay
audio.addEventListener("play", function () {
    disc.style.animationPlayState = "running";
});

// Khi nhạc dừng → đĩa ngừng quay
audio.addEventListener("pause", function () {
    disc.style.animationPlayState = "paused";
});

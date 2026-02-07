const audio = document.getElementById("audioPlayer");
const title = document.getElementById("songTitle");
const disc = document.getElementById("disc");
const playlistItems = document.querySelectorAll(".sidebar li");

function playSong(name, file) {

    title.innerText = name;
    audio.src = file;
    audio.play();

    // Highlight bài đang phát
    playlistItems.forEach(item => item.classList.remove("active"));
    event.target.classList.add("active");
}

// Khi nhạc chạy
audio.addEventListener("play", function () {
    disc.style.animationPlayState = "running";
    disc.classList.add("playing");
});

// Khi nhạc dừng
audio.addEventListener("pause", function () {
    disc.style.animationPlayState = "paused";
    disc.classList.remove("playing");
});

// Khi nhạc kết thúc
audio.addEventListener("ended", function () {
    disc.style.animationPlayState = "paused";
    disc.classList.remove("playing");
});

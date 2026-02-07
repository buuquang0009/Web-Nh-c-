const audio = document.getElementById("audioPlayer");
const title = document.getElementById("songTitle");
const disc = document.getElementById("disc");
const notesContainer = document.getElementById("musicNotes");

function playSong(event, name, file) {

    title.innerText = name;
    audio.src = file;
    audio.play();

    document.querySelectorAll(".playlist li")
        .forEach(li => li.classList.remove("active"));

    event.currentTarget.classList.add("active");
}

// Khi nhạc chạy
audio.addEventListener("play", () => {
    disc.style.animationPlayState = "running";
    disc.classList.add("playing");
    startNotes();
});

// Khi dừng
audio.addEventListener("pause", () => {
    disc.style.animationPlayState = "paused";
    disc.classList.remove("playing");
});

// Tạo nốt nhạc bay
let noteInterval;

function startNotes() {
    noteInterval = setInterval(() => {
        createNote();
    }, 400);
}

function createNote() {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerText = "♪";

    note.style.left = Math.random() * 80 + "%";
    note.style.top = "60%";

    notesContainer.appendChild(note);

    setTimeout(() => {
        note.remove();
    }, 3000);
}

audio.addEventListener("pause", () => {
    clearInterval(noteInterval);
});

audio.addEventListener("ended", () => {
    clearInterval(noteInterval);
});

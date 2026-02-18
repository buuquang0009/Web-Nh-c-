document.addEventListener("DOMContentLoaded", function () {

    const audio = document.getElementById("audioPlayer");
    const title = document.getElementById("songTitle");
    const playAllBtn = document.getElementById("playAllBtn");

    let currentIndex = -1;
    let isPlayingAll = false;

    /* ===== LẤY DANH SÁCH BÀI ===== */
    function getSongs() {
        return Array.from(document.querySelectorAll("li[data-file]"));
    }

    /* ===== PHÁT THEO INDEX ===== */
    function playByIndex(index) {

        const songs = getSongs();
        if (!songs[index]) return;

        currentIndex = index;

        const song = songs[currentIndex];

        title.textContent = song.dataset.name;
        audio.src = song.dataset.file;
        audio.play();

        songs.forEach(li => li.classList.remove("active"));
        song.classList.add("active");
    }

    /* ===== CLICK TỪNG BÀI ===== */
    document.addEventListener("click", function (e) {

        const li = e.target.closest("li[data-file]");
        if (!li) return;

        const songs = getSongs();
        const index = songs.indexOf(li);

        isPlayingAll = false; // tắt chế độ play all
        playByIndex(index);
    });

    /* ===== PLAY ALL ===== */
    playAllBtn.addEventListener("click", function () {

        const songs = getSongs();
        if (!songs.length) return;

        isPlayingAll = true;

        // Nếu chưa phát bài nào thì bắt đầu từ bài đầu
        if (currentIndex === -1) {
            playByIndex(0);
        }
        // Nếu đang phát 1 bài rồi thì cứ tiếp tục
        else {
            audio.play();
        }
    });

    /* ===== TỰ ĐỘNG PHÁT BÀI TIẾP ===== */
    audio.addEventListener("ended", function () {

        if (!isPlayingAll) return;

        const songs = getSongs();

        if (currentIndex < songs.length - 1) {
            playByIndex(currentIndex + 1);
        } else {
            isPlayingAll = false; // hết danh sách thì dừng
        }
    });

});

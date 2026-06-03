document.addEventListener("DOMContentLoaded", () => {
    const pages = document.querySelectorAll('.page');
    
    // Teks baru yang lebih santai & elegan
    const text = "Life keeps us busy, and I'm really enjoying my own grind right now. " +
                 "Just wanted to share a little something since you liked this song. " +
                 "Staying cool, keep doing your thing, and maybe appreciate the good times we had. " +
                 "Oh, and meet my bini—she’s definitely keeping me sane through all this busy-ness! 😋";
                 
    let isTypingStarted = false;

    // --- LOGIKA MUSIK & LIRIK ---
    const song = document.getElementById('mySong');
    const musicBtn = document.getElementById('btnMusic');
    const lyricsDisplay = document.getElementById('lyrics-display');
    
    const lyrics = [
        { time: 0, text: "It's a beautiful night..." },
        { time: 4, text: "We're looking for something dumb to do" },
        { time: 8, text: "Hey baby, I think I wanna marry you" },
        { time: 13, text: "Is it the look in your eyes?" },
        { time: 17, text: "Or is it this dancing juice?" },
        { time: 21, text: "Who cares baby, I think I wanna marry you" }
    ];

    if (musicBtn && song) {
        musicBtn.addEventListener('click', () => {
            if (song.paused) {
                song.play();
                musicBtn.innerHTML = '<span class="material-icons">pause</span>';
            } else {
                song.pause();
                musicBtn.innerHTML = '<span class="material-icons">music_note</span>';
            }
        });
    }

    if (song) {
        song.addEventListener('timeupdate', () => {
            const current = song.currentTime;
            const activeLyric = lyrics.find(l => Math.abs(current - l.time) < 0.5);
            if (activeLyric && lyricsDisplay) {
                lyricsDisplay.innerText = activeLyric.text;
                lyricsDisplay.style.opacity = 1;
            }
        });
    }

    // --- FUNGSI NAVIGASI ---
    window.goToPage = function(pageNumber) {
        pages.forEach(page => page.classList.remove('active'));
        const targetPage = pages[pageNumber - 1];
        if (targetPage) {
            targetPage.classList.add('active');
        }
        if (pageNumber === 2 && !isTypingStarted) {
            typeText();
        }
    };

    function typeText() {
        isTypingStarted = true;
        let i = 0;
        const element = document.getElementById("typing-text");
        if (!element) return;
        element.innerHTML = "";
        function typing() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                // Kecepatan mengetik sedikit lebih cepat agar teks panjang tidak terlalu lama
                setTimeout(typing, 30); 
            }
        }
        typing();
    }

    // --- FUNGSI KEMBANG API ---
    function triggerFireworks() {
        for (let i = 0; i < 30; i++) {
            const f = document.createElement('div');
            f.className = 'firework';
            f.style.left = Math.random() * 100 + 'vw';
            f.style.top = Math.random() * 100 + 'vh';
            f.style.backgroundColor = ['#ff99cc', '#ffffff', '#ffccff'][Math.floor(Math.random() * 3)];
            document.body.appendChild(f);
            setTimeout(() => f.remove(), 1000);
        }
    }

    const btnYes = document.getElementById('btnYes');
    if (btnYes) {
        btnYes.addEventListener('click', () => {
            triggerFireworks();
            setTimeout(() => {
                alert('Yay! Glad you liked it!');
            }, 500);
        });
    }

    window.goToPage(1);
});

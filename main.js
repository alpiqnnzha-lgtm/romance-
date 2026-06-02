document.addEventListener("DOMContentLoaded", () => {
    const pages = document.querySelectorAll('.page');
    const text = "With my beautiful girl and my bini, life feels truly complete. They both bring so much happiness and inspiration to my days.";
    let isTypingStarted = false;

    // Fungsi Navigasi
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
                setTimeout(typing, 50);
            }
        }
        typing();
    }

    // Fungsi Kembang Api
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

    // Event Listener Tombol YES
    const btnYes = document.getElementById('btnYes');
    if (btnYes) {
        btnYes.addEventListener('click', () => {
            triggerFireworks();
            setTimeout(() => {
                alert('Yay! I love you!');
            }, 500);
        });
    }

    // Jalankan default
    window.goToPage(1);
});

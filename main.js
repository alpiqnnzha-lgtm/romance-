const pages = document.querySelectorAll('.page');
const text = "With my beautiful girl and my bini, life feels truly complete. They both bring so much happiness and inspiration to my days.";
let isTypingStarted = false; 

function goToPage(pageNumber) {
    // 1. Sembunyikan semua halaman
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // 2. Tampilkan halaman tujuan
    const targetPage = pages[pageNumber - 1];
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // 3. Trigger efek ketik hanya jika pindah ke halaman 2 dan belum pernah jalan
    if (pageNumber === 2 && !isTypingStarted) {
        typeText();
    }
}

function typeText() {
    isTypingStarted = true;
    let i = 0;
    const element = document.getElementById("typing-text");
    if (!element) return; // Keamanan tambahan
    element.innerHTML = ""; 
    element.style.whiteSpace = "normal"; 
    
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
    for (let i = 0; i < 30; i++) { // Dibuat sedikit lebih banyak biar lebih meriah
        const f = document.createElement('div');
        f.className = 'firework';
        f.style.left = Math.random() * 100 + 'vw';
        f.style.top = Math.random() * 100 + 'vh';
        f.style.backgroundColor = ['#ff99cc', '#ffffff', '#ffccff'][Math.floor(Math.random() * 3)];
        document.body.appendChild(f);
        setTimeout(() => f.remove(), 1000);
    }
}

// Event Listener untuk tombol YES
window.addEventListener('DOMContentLoaded', () => {
    const btnYes = document.getElementById('btnYes');
    if (btnYes) {
        btnYes.addEventListener('click', () => {
            triggerFireworks();
            setTimeout(() => {
                alert('Yay! I love you!');
            }, 500);
        });
    }
});

// Otomatis jalankan halaman 1 saat pertama kali dimuat
window.onload = () => {
    goToPage(1);
};

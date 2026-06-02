let currentPage = 1;

document.addEventListener('click', () => {
    // Jangan ganti halaman kalau klik tombol YES di halaman 4
    if(currentPage === 4) return;

    document.getElementById(`page${currentPage}`).classList.remove('active');
    currentPage++;
    document.getElementById(`page${currentPage}`).classList.add('active');
    
    if(currentPage === 2) startTyping();
});

function startTyping() {
    const text = "Hai sayang, terima kasih sudah mau buka kado spesial ini. Aku cuma mau bilang kalau kamu sangat berarti buat aku. Semoga harimu menyenangkan ya!";
    const el = document.getElementById("typing-text");
    el.innerHTML = "";
    let i = 0;
    let timer = setInterval(() => {
        el.innerHTML += text.charAt(i);
        i++;
        if(i >= text.length) clearInterval(timer);
    }, 80);
}

// Tombol lari-lari untuk Halaman 4
const btn = document.getElementById('btnYes');
btn.addEventListener('mouseover', () => {
    btn.style.position = 'absolute';
    btn.style.left = Math.random() * 70 + "%";
    btn.style.top = Math.random() * 70 + "%";
});

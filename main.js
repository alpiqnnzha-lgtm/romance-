const pages = document.querySelectorAll('.page');
const text = "With my beautiful girl and my bini, life feels truly complete. They both bring so much happiness and inspiration to my days.";

function goToPage(pageNumber) {
    // 1. Sembunyikan semua halaman
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // 2. Tampilkan halaman tujuan (index array dimulai dari 0, jadi pageNumber - 1)
    const targetPage = pages[pageNumber - 1];
    targetPage.classList.add('active');
    
    // 3. Trigger efek ketik jika pindah ke halaman 2
    if (pageNumber === 2) {
        typeText();
    }
}

function typeText() {
    let i = 0;
    const element = document.getElementById("typing-text");
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

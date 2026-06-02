const pages = document.querySelectorAll('.page');
let currentPage = 0;

function nextPage() {
    pages[currentPage].classList.remove('active');
    currentPage++;
    pages[currentPage].classList.add('active');
    if(currentPage === 1) typeText();
}

// Ganti bagian const text dengan ini:
const text = "With my beautiful girl and my favorite idol, life feels truly complete. They both bring so much happiness and inspiration to my days.";

function typeText() {
    let i = 0;
    const element = document.getElementById("typing-text");
    element.innerHTML = "";
    
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 50); // Kecepatan ketikan
        }
    }
    typing();
}

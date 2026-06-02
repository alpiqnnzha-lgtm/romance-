const pages = document.querySelectorAll('.page');
let currentPage = 0;

function nextPage() {
    pages[currentPage].classList.remove('active');
    currentPage++;
    pages[currentPage].classList.add('active');
    if(currentPage === 1) typeText();
}

// Ganti bagian const text dengan ini:
const text = "Meeting you changed my whole world completely. You are the puzzle piece that makes me feel whole. I truly treasure every single moment we have together.";

// Fungsi ketik tetap sama:
function typeText() {
    let i = 0;
    const element = document.getElementById("typing-text");
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

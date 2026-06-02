const pages = document.querySelectorAll('.page');
let currentPage = 0;

function nextPage() {
    pages[currentPage].classList.remove('active');
    currentPage++;
    pages[currentPage].classList.add('active');
    if(currentPage === 1) typeText();
}

// Long English text
const text = "Since the day I met you, my life has been filled with so much color and joy. You are the puzzle piece that makes my heart feel complete. I love the way we laugh together, the way we share our dreams, and simply how you make every moment feel special. Thank you for being you, and for choosing to be by my side.";

function typeText() {
    let i = 0;
    const element = document.getElementById("typing-text");
    element.innerHTML = "";
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 40);
        }
    }
    typing();
}

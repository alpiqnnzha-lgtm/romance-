const pages = document.querySelectorAll('.page');
let currentPage = 0;

function nextPage() {
    pages[currentPage].classList.remove('active');
    currentPage++;
    pages[currentPage].classList.add('active');
    if(currentPage === 1) typeText();
}

const text = "Hai sayang... Terima kasih ya sudah hadir di hidupku. Setiap hari bersamamu adalah anugerah terindah yang pernah aku miliki. Aku berharap kita bisa terus bersama melewati suka dan duka selamanya. Kamu adalah orang yang paling aku sayang.";

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

const pages = document.querySelectorAll('.page');
let currentPage = 0;

document.addEventListener('click', function(e) {
    if (e.target.id === 'btnYes') return;

    if (currentPage < pages.length - 1) {
        pages[currentPage].classList.remove('active');
        currentPage++;
        pages[currentPage].classList.add('active');
    }
});

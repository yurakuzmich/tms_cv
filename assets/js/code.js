const headers = document.querySelectorAll('.header__clickable');

headers.forEach(header => {
    header.addEventListener('click', (e) => {
        let nextElement = e.target.nextElementSibling;
        nextElement.classList.toggle('invisible');
        e.target.classList.toggle('header__opened');
    });
});
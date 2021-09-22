const btn = document.querySelectorAll('.feature__link');
const lists = document.querySelectorAll('.feature-sub');

btn.forEach((btns) => {
    btns.addEventListener('click', () => {
        btn.forEach((btnItem, idx) => {
            if (btnItem === btns) {
                btnItem.classList.toggle('feature__link_active');
                lists[idx].classList.toggle('hidden');
            } else {
                btnItem.classList.remove('feature__link_active');
                lists[idx].classList.add('hidden');
            }
        });
    });
});
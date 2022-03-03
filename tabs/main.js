const d = document,
    btnTab = d.querySelectorAll('.tab-btn[data-id]'),
    divTab = d.querySelectorAll('.content');

d.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
        btnTab.forEach((el) => {
            e.target.classList.add('active');
            el.classList.remove('active');
        });
        divTab.forEach((el) => {
            el.classList.add('active');
            el.classList.remove('active');
        });
        const divCurrent = d.querySelector(`#${id}`);
        divCurrent.classList.add('active');
    }
});

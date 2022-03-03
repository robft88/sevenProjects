const d = document,
    btnMenu = d.querySelector('.hamburger'),
    sidebarMenu = d.querySelector('.sidebar');
d.addEventListener('click', (e) => {
    if (e.target === btnMenu || e.target.matches(`.hamburger *`)) {
        sidebarMenu.classList.toggle('active');
        btnMenu.classList.toggle('is-active');
    } if (e.target.matches('.link') || e.target.matches('.link a')) {
        sidebarMenu.classList.remove('active');
        btnMenu.classList.toggle('is-active');
    }
});

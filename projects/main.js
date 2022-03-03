const projects = [
    {
        id: 1,
        name: 'countdown',
        link: 'https://raft-countdown.netlify.app/',
        desc: 'Aplicación de cuenta regresiva. Al llegar a la fecha límite, se imprime un mensaje y la imagen cambia.'
    },
    {
        id: 2,
        name: 'navbar & sidebar',
        link: 'https://raft-navbar.netlify.app/',
        desc: 'Componente responsive de Menú de Navegación. En dispositivos móviles, se habilita el sidebar.'
    },
    {
        id: 3,
        name: 'products',
        link: 'https://raft-products.netlify.app/',
        desc: 'Aplicación simple donde se imprimen una serie de productos y se pueden filtrar por medio de botones.'
    },
    {
        id: 4,
        name: 'random color',
        link: 'https://raft-random-color.netlify.app/',
        desc: 'Aplicación que cambia el color al fondo de la página, se puede elegir entre código Hex, RGB y RGBA.'
    },
    {
        id: 5,
        name: 'reviews',
        link: 'https://raft-reviews.netlify.app/',
        desc: 'Componente donde se imprimen comentarios y se pueden observar con click o usando el teclado.'
    },
    {
        id: 6,
        name: 'tabs',
        link: 'https://raft-tabs.netlify.app/',
        desc: 'Componente de tipo tab, donde se imprime información a traves de las distintas pestañas.'
    },
    {
        id: 7,
        name: 'todo list',
        link: 'https://raft-todo.netlify.app/',
        desc: 'Aplicación simple de tareas por hacer, se pueden agregar tareas, editarlas y borrarlas.'
    }
];
const d = document,
    $section = d.querySelector('.section-center'),
    $btnsFilter = d.querySelectorAll('.filter-btn'),
    $template = d.querySelector('#template').content,
    $fragment = d.createDocumentFragment();
window.addEventListener('DOMContentLoaded', () => {
    printProjects();
});
const printProjects = () => {
    projects.forEach(project => {
        const clone = d.importNode($template, true);
        clone.querySelector('.project-item').href = project.link;
        clone.querySelector('.project-img').src = `img/project-${project.id}.jpg`;
        clone.querySelector('.project-title').textContent = project.name;
        clone.querySelector('.project-text').textContent = project.desc;
        $fragment.appendChild(clone);
    });
    $section.appendChild($fragment);
};

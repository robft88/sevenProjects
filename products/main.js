const products = [
    {
        id: 1,
        title: "arepas",
        category: "breakfast",
        price: 15.99,
        img: "img/product-1.jpg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed.`,
    },
    {
        id: 2,
        title: "pabellón criollo",
        category: "lunch",
        price: 13.99,
        img: "img/product-2.jpg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats.`,
    },
    {
        id: 3,
        title: "papelón con limón",
        category: "shakes",
        price: 6.99,
        img: "img/product-3.jpg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "empanadas",
        category: "breakfast",
        price: 20.99,
        img: "img/product-4.jpg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut.`,
    },
    {
        id: 5,
        title: "carne en vara",
        category: "lunch",
        price: 22.99,
        img: "img/product-5.jpg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up.`,
    },
    {
        id: 6,
        title: "chicha",
        category: "shakes",
        price: 18.99,
        img: "img/product-6.jpg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday.`,
    },
    {
        id: 7,
        title: "tequeños",
        category: "breakfast",
        price: 8.99,
        img: "img/product-7.jpg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bir.`,
    },
    {
        id: 8,
        title: "cachapas",
        category: "lunch",
        price: 12.99,
        img: "img/product-8.jpg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut.`,
    },
    {
        id: 9,
        title: "cocada",
        category: "shakes",
        price: 6.99,
        img: "img/product-9.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];
const d = document,
    $section = d.querySelector('.section-center'),
    $btnsFilter = d.querySelectorAll('.filter-btn'),
    $template = d.querySelector('#template').content,
    $fragment = d.createDocumentFragment();

window.addEventListener('DOMContentLoaded', () => {
    printProducts(products);
});

$btnsFilter.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let productsCateg = products.filter(el => {
            return el.category === e.target.dataset.categ;
        });
        if (e.target.dataset.categ === 'all') {
            printProducts(products);
        } else {
            printProducts(productsCateg);
        }
    })
});

const printProducts = (items) => {
    $section.innerHTML = '';
    items.forEach(product => {
        const clone = d.importNode($template, true);
        clone.querySelector('.product-img').src = `${product.img}`;
        clone.querySelector('.product-title').textContent = product.title;
        clone.querySelector('.product-price').textContent = product.price;
        clone.querySelector('.product-text').textContent = product.desc;
        $fragment.appendChild(clone);
    });
    $section.appendChild($fragment);
};

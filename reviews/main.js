const d = document,
    reviews = [
        {
            id: 1,
            name: 'lagertha lothbrok',
            job: 'queen of kattegat',
            img: 'https://www.terra.cl/u/fotografias/m/2021/7/12/f1280x720-13207_144882_4825.jpg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis aliquet dolor. Mauris iaculis magna sed turpis condimentum aliquam. Ut congue orci sapien, aliquam imperdiet laoreet tortor aliquam a. Suspendisse vel dictum purus.'
        },
        {
            id: 2,
            name: 'night king',
            job: 'white walker master',
            img: 'https://i1.wp.com/wipy.tv/wp-content/uploads/2019/11/verdadera-apariencia-de-Night-King-en-Game-of-Thrones.jpg?resize=768%2C461&ssl=1',
            text: 'Sed vel tortor non libero malesuada porttitor. Aenean ut lacus a dui pharetra efficitur non sit amet purus. Sed non mauris quam. Vivamus posuere lobortis quam, in laoreet ipsum aliquam ut. Pellentesque habitant morbi tristique senectus.'
        },
        {
            id: 3,
            name: 'plank',
            job: 'best friend',
            img: 'https://www.pngitem.com/pimgs/m/224-2241927_ed-edd-n-eddy-plank-by-ali-srn.png',
            text: 'Phasellus sapien orci, porttitor egestas diam ut, pretium auctor nunc. Ut eleifend pellentesque dolor, ac posuere libero. Maecenas aliquet congue tortor et mollis. In nibh velit, maximus ut odio at, ullamcorper condimentum quam.'
        },
        {
            id: 4,
            name: 'sansa stark',
            job: 'Queen in the North',
            img: 'https://media.revistavanityfair.es/photos/60e83dbb46da3cf1bc9fa06c/master/w_1600%2Cc_limit/177706.jpg',
            text: 'Pellentesque rhoncus dignissim diam ut mollis. Maecenas quis nulla a purus lobortis pretium vel nec eros. Vivamus aliquet bibendum lectus, id maximus erat tempus a. Vivamus purus lacus, egestas ut felis sed, mattis faucibus augue.'
        }, {
            id: 5,
            name: 'george clooney',
            job: 'actor-director',
            img: 'https://cnnespanol.cnn.com/wp-content/uploads/2015/10/george-clooney1.jpg?quality=100&strip=info',
            text: 'Etiam posuere ligula a ante auctor pulvinar. Nullam commodo quis libero at dictum. Nam suscipit efficitur sem. Aenean tristique venenatis odio, vel efficitur felis malesuada sed. Nullam faucibus tincidunt lacus ut mollis. Cras euismod felis.'
        }
    ],
    $img = d.querySelector('#user-img'),
    $imgContainer = d.querySelector('.img-container'),
    $user = d.querySelector('#user'),
    $job = d.querySelector('#job'),
    $review = d.querySelector('#review'),
    $prevBtn = d.querySelector('.prev-btn'),
    $nextBtn = d.querySelector('.next-btn'),
    $randomBtn = d.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', () => {
    setData(currentItem);
    removeActive();
});

d.addEventListener('click', (e) => {
    if (e.target === $prevBtn) {
        addActive();
        currentItem--;
        if (currentItem < 0) {
            currentItem = reviews.length - 1;
        } setData(currentItem);
        removeActive();
    } if (e.target === $nextBtn) {
        addActive();
        currentItem++;
        if (currentItem >= reviews.length) {
            currentItem = 0;
        } setData(currentItem);
        removeActive();
    } if (e.target === $randomBtn) {
        addActive();
        currentItem = Math.floor(Math.random() * reviews.length);
        setData(currentItem);
        removeActive();
    }
});

d.addEventListener("keyup", (e) => {
    if (e.key === "ArrowLeft") {
        addActive();
        currentItem--;
        if (currentItem < 0) {
            currentItem = reviews.length - 1;
        } setData(currentItem);
        removeActive();
    } if (e.key === "ArrowRight") {
        addActive();
        currentItem++;
        if (currentItem >= reviews.length) {
            currentItem = 0;
        } setData(currentItem);
        removeActive();
    }
});

const addActive = () => {
    $imgContainer.classList.toggle('active');
    $user.classList.toggle('active');
    $job.classList.toggle('active');
    $review.classList.toggle('active');
};

const removeActive = () => {
    setTimeout(() => {
        addActive();
    }, 2000)
};

const setData = (num) => {
    const item = reviews[num];
    $img.src = item.img;
    $user.textContent = item.name;
    $job.textContent = item.job;
    $review.textContent = item.text;
};

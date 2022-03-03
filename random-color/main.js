const d = document,
    btn = d.querySelector('.btn'),
    color = d.querySelector('.color'),
    select = d.querySelector('#select-code');

let rC = '#f9fffb';
d.body.style.backgroundColor = rC;
color.textContent = rC;

d.addEventListener('click', (e) => {
    if (e.target.matches('.btn')) {
        if (select.value === 'hex') {
            rC = getRandomHexColor();
        };
        if (select.value === 'rgb') {
            rC = getRandomRgbaColor(0);
        };
        if (select.value === 'rgba') {
            rC = getRandomRgbaColor(1);
        };
        d.body.style.backgroundColor = rC;
        color.textContent = rC;
    };
});

const getRandomHexColor = () => {
    return '#000000'.replace(/0/g, () => {
        return (Math.floor(Math.random() * 16).toString(16));
    });
};

const getRandomRgbaColor = (helper) => {
    const r = getRandomNum(0, 255);
    const g = getRandomNum(0, 255);
    const b = getRandomNum(0, 255);
    if (helper === 1) {
        const a = getRandomNum(1, 10) / 10;
        return `rgb(${r}, ${g}, ${b}, ${a})`;
    };
    return `rgb(${r}, ${g}, ${b})`;
};

const getRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

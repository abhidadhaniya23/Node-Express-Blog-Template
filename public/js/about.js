const img = `img/about-bg.jpg`;
const header = document.getElementById('header');

const createImgElm = document.createElement("img");
createImgElm.src = img;

createImgElm.onload = () => {
    header.style.backgroundImage = 'url(../img/about-bg.jpg)';
}
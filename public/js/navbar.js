// console.log('linked');
const navBtn = document.getElementById('navBtn');
navBtn.addEventListener('click', () => {
    console.log('Clicked');

    // console.log('btn clicked');
    document.querySelector('.navDiv').classList.toggle('navbar-active');
    document.getElementById('navBar').classList.toggle('links-active');
    // document.querySelector('nav').classList.replace('-top-40','top-24');
})
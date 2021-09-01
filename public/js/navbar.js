// console.log('linked');
const navBtn = document.getElementById('navBtn');
navBtn.addEventListener('click', () => {
    // console.log('btn clicked');
    document.querySelector('nav').classList.toggle('navbar-active');
    // document.querySelector('nav').classList.replace('-top-40','top-24');
})
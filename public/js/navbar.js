// console.log('linked');
const navBtn = document.getElementById('navBtn');

navBtn.addEventListener('click', () => {
    document.querySelector('.navDiv').classList.toggle('navbar-active');
    document.getElementById('navBar').classList.toggle('links-active');
    document.querySelectorAll('.nav-link').classList.toggle('show-links');
})
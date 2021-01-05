const mainNav = document.getElementById('js-menu');
const navBarToggle = document.getElementById('js-nav-toggle');

navBarToggle.addEventListener("click", ()=>{
    mainNav.classList.toggle('active')
})
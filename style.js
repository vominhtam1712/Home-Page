const mode = document.querySelector('.mode');
const icon = document.querySelector('.bxs-moon');
const garuda = document.querySelector('.garuda-silhoutte');  

mode.addEventListener('click', function(){
    document.body.classList.toggle('dark-mode');

    if(document.body.classList.contains('dark-mode')){
        icon.classList.remove('bxs-moon');
        icon.classList.add('bxs-sun');
        garuda.classList.add('garuda-dark');
    }
    else
    {
        icon.classList.remove('bxs-sun');
        icon.classList.add('bxs-moon'); 
        garuda.classList.remove('garuda-dark');
    }
});

const bars = document.querySelector('.toggle-btn');
const navbar = document.querySelector('header .navbar');

bars.addEventListener('click', function() {
    if(bars.classList.contains('bx-menu')){
        bars.classList.remove('bx-menu');
        bars.classList.add('bx-x-circle');
        navbar.classList.add('slide')
    }
    else
    {
        bars.classList.add('bx-menu');
        bars.classList.remove('bx-x-circle');
        navbar.classList.remove('slide')
    }
});

window.addEventListener("resize", function () {
    let menu = document.querySelector(".shopping-menu");
    if (window.innerWidth <= 1050) {
        menu.removeAttribute("hidden"); 
    } else {
        menu.setAttribute("hidden", true); 
    }

    let search = document.querySelector(".search");
    if (window.innerWidth <= 1050) {
        search.removeAttribute("hidden");  
    } else {
        search.setAttribute("hidden", true);  
    }
});

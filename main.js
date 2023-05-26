const navbar = document.querySelector('.navbar')
const open = document.querySelector('.fa-bars')
const close = document.querySelector('.close')

close.addEventListener('click', function() {
    navbar.style.marginRight = '-250px'; 
    open.style.display = 'block' 
})

open.onclick = function() {
    navbar.style.marginRight = '0';
    navbar.style.display = 'flex';
    open.style.display = 'none'
}



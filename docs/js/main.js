const nav = document.querySelector('nav')


window.addEventListener('scroll', function(){
    nav.classList.toggle('abajo', window.scrollY>612)
})

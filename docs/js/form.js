const buttonForm = document.querySelector('#change')
const buttonForm2 = document.querySelector('#change2')
const formLogIn = document.querySelector('.form__logIn')
const formCheckIn = document.querySelector('.form__checkIn')

buttonForm.addEventListener('click', () =>{
    formLogIn.classList.toggle('form__logIn--active')
    formCheckIn.classList.toggle('form__checkIn--active')

})
buttonForm2.addEventListener('click', () =>{
    formLogIn.classList.toggle('form__logIn--active')
    formCheckIn.classList.toggle('form__checkIn--active')

})
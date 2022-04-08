const sr = ScrollReveal()

// HEADER
sr.reveal('.header__nav', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
})

sr.reveal('.header__container__title', {
    duration: 3000,
})

sr.reveal('.header__container__logo', {
    duration: 3000,
})

// INDEX

sr.reveal('.index__productos__title', {
    duration: 4000,
    origin: 'left',
    distance: '400px',
    reset: true
})

sr.reveal('.animation__card__1', {
    duration: 3000,
    origin: 'bottom',
    distance: '100px',
    reset: true
})

sr.reveal('.animation__card__2', {
    duration: 4000,
    origin: 'bottom',
    distance: '100px',
    reset: true
})

sr.reveal('.animation__card__3', {
    duration: 5000,
    origin: 'bottom',
    distance: '100px',
    reset: true
})

sr.reveal('.information__cards', {
    duration: 3000,
    scale: 0.85,
    reset: true
})

sr.reveal('.information__links', {
    duration: 3000,
    scale: 0.85,
    reset: true
})

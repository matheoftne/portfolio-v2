ScrollReveal({
    distance: '80px',
    duration: 1500,
    delay: 400
});

ScrollReveal().reveal('header', {delay: 200, origin: 'top'});
ScrollReveal().reveal('main', {delay: 300, origin: 'top'});

ScrollReveal().reveal('#first-container', {delay: 200, origin: 'right'});
ScrollReveal().reveal('#second-container', {delay: 300, origin: 'left'});
ScrollReveal().reveal('#third-container', {delay: 400, origin: 'right'});

ScrollReveal().reveal('.container', {delay: 200, origin: 'top'});
ScrollReveal().reveal('#desc-container', {delay: 400, origin: 'top'});

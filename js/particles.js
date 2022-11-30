const btnDestroy = document.querySelector('#btn-menu2');
var particles;

particles = Particles.init({
    selector: '.background',
    maxParticles: 200,
    color: '#E01E37',
    connectParticles: true,

    // options for breakpoints
    responsive: [
        {
            breakpoint: 425,
            options: {
                maxParticles: 100,
                connectParticles: true
            }
        }
    ]
});
particles.pauseAnimation();

btnDestroy.addEventListener('click', () => {
    if (btnDestroy.classList.contains('active')) {
        particles.pauseAnimation();
        btnDestroy.classList.toggle('active');
    } else {
        particles.resumeAnimation();
        btnDestroy.classList.toggle('active');
    }
})
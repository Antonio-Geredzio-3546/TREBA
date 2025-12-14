
const animatedBlocks = document.querySelectorAll('.animate-on-scroll');

function checkBlocks() {
    const triggerBottom = window.innerHeight * 0.85;

    animatedBlocks.forEach(block => {
        const blockTop = block.getBoundingClientRect().top;

        if (blockTop < triggerBottom) {
            block.classList.add('active');
        }
    });
}

window.addEventListener('scroll', checkBlocks);
window.addEventListener('load', checkBlocks);


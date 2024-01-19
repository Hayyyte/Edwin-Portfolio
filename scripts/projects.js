const carousels = document.querySelectorAll('.project-carousel');

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    carousels.forEach(carousel => {
        carousel.setAttribute("data-animated", true);
    });

    const projectList = document.querySelector('.project-list');
    const projectItems = Array.from(projectList.children);

    projectItems.forEach(item => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        projectList.appendChild(duplicatedItem);
    })
}
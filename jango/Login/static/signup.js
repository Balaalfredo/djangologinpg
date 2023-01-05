function create(select, all = false) {
    if (all) {
        const element = document.querySelectorAll(select);
        return element;
    }

    else {
        const element = document.querySelector(select);
        return element;
    }
}


const box = create('.box');
// const bubbles = create('.bubbles');

box.addEventListener('click', (e1) => {
    const bounding = box.getBoundingClientRect();
    const top = bounding.top;
    const left = bounding.left;
    const eX = e1.clientX;
    const eY = e1.clientY;
    const bubbles = document.createElement('div');

    bubbles.setAttribute('class', 'bubbles');
    bubbles.style.top = `${eY - top}px`;
    bubbles.style.left = `${eX - left}px`;
    box.appendChild(bubbles);


    setTimeout(() => {
        box.removeChild(bubbles);
    }, 4000)

    // box.addEventListener('dblclick', () => {

    // })


})
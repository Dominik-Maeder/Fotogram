let img = [
    {
        src:'./assets/img/img11.jpg',
        title: 'Test',
        alt: 'Test',
    },
    {
        src:'/assets/img/img5.jpg',
        title: 'Test',
        alt: 'Test',
    },
    {
        src:'./assets/img/img7.jpg',
        title: 'Test',
        alt: 'Test',
    },

    {
        src:'./assets/img/img8.jpg',
        title: 'Test',
        alt: 'Test',
    },
    {
        src:'./assets/img/img9.jpg',
        title: '',
        alt: '',
    },
    {
        src:'./assets/img/img11.jpg',
        title: '',
        alt: '',
    },
    {
        src:'./assets/img/img12.jpg',
        title: '',
        alt: '',
    },
];


function init(){
    let content = document.getElementById('content');

    for (let i = 0; i < img.length; i++) {
        content.innerHTML += getImgTemplate(i)
    }
}

function getImgTemplate(i){
    return `
        <figure class="img-container" onclick="openOverlay(event, ${i})">
            <img src="${img[i].src}" alt="${img[i].alt}">
            <figcaption>${img[i].title}</figcaption>
        </figure>
    `
}

function openOverlay(e, i){
    e.preventDefault();
    let content  = document.getElementById('main');

    let overlay = document.createElement('div');
    overlay.classList.add('overlay')
    overlay.innerHTML = renderOverlay(i)
    content.appendChild(overlay);
}

function renderOverlay(i){
    return `
        <figure class="overlay-content" role="dialog" aria-modal="true" aria-label="Image preview: ${img[i].title}">
            <img id="imgContainer" src="${img[i].src}" alt="${img[i].alt}">
            <figcaption>${img[i].title}</figcaption>
            
            <nav aria-label="Image navigation">
                <button type="button" onclick="prevImg(${i})" aria-label="Previous image">‹</button>
                <button type="button" onclick="nextImg(${i})" aria-label="Next image">›</button>
            </nav>
        </figure>

    `
}

function prevImg(i){
    let newIndex = ((i - 1 + img.length) % img.length)
    updateOverlay(newIndex);
}

function nextImg(i){
    let newIndex = ((i + 1) % img.length)
    updateOverlay(newIndex);
}

function updateOverlay(newIndex){
    let overlay = document.querySelector('.overlay');
    if (!overlay) return;
    overlay.innerHTML = renderOverlay(newIndex);
}
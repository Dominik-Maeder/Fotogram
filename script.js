let img = [
    {
        src:'./assets/img/img11.jpg',
        title: 'Tennisplatz',
        alt: 'Bild eines Tennisschlägers',
    },
    {
        src:'/assets/img/img5.jpg',
        title: 'Herdkochen',
        alt: 'Bild vom Kochen am Herd',
    },
    {
        src:'./assets/img/img7.jpg',
        title: 'Klassiches Caffee',
        alt: 'Klassiches Caffe mit Kuchen, Getränk, Kamera und Sonnenbrille',
    },
    {
        src:'./assets/img/img8.jpg',
        title: 'Basketballkorb',
        alt: 'Basketball der gerade im Basketballkorb landet',
    },
    {
        src:'./assets/img/img9.jpg',
        title: 'Tour de France',
        alt: 'Radfahrer bei der Tour de France',
    },
    {
        src:'./assets/img/img12.jpg',
        title: 'Seebrücke',
        alt: 'Seebrücke in Bali',
    },
];

let currentIndex = 0;

function init() {
    let content = document.getElementById('content');
    for (let i = 0; i < img.length; i++) {
        content.innerHTML += getImgTemplate(i);
    }
}

function getImgTemplate(i) {
    return `
        <figure class="img-container" onclick="openOverlay(${i})">
            <img src="${img[i].src}" alt="${img[i].alt}">
            <figcaption>${img[i].title}</figcaption>
        </figure>
    `;
}

function openOverlay(i) {
    currentIndex = i;

    let existing = document.querySelector('dialog.overlay');
    if (existing) existing.remove();

    let overlay = document.createElement('dialog');
    overlay.classList.add('overlay');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-labelledby', 'dialog-title');
    overlay.innerHTML = renderOverlay(i);

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeOverlay();
    });

    document.body.appendChild(overlay);
    overlay.showModal();
    overlay.querySelector('.close-btn').focus();
}

function closeOverlay() {
    let overlay = document.querySelector('dialog.overlay');
    if (overlay) {
        overlay.close();
        overlay.remove();
    }
}

function renderOverlay(i) {
    return `
        <figure class="overlay-content">
            <button class="close-btn" onclick="closeOverlay()" aria-label="Close overlay">✕</button>
            <img id="imgContainer" src="${img[i].src}" alt="${img[i].alt}">
            <figcaption id="dialog-title">${img[i].title}</figcaption>
            <nav aria-label="Img navigation">
                <button type="button" onclick="prevImg()" aria-label="Previous Img"><</button>
                <button type="button" onclick="nextImg()" aria-label="Next Img">></button>
            </nav>
            
        </figure>
    `;
}

function prevImg() {
    currentIndex = (currentIndex - 1 + img.length) % img.length;
    updateOverlay(currentIndex);
}

function nextImg() {
    currentIndex = (currentIndex + 1) % img.length;
    updateOverlay(currentIndex);
}

function updateOverlay(newIndex) {
    let overlay = document.querySelector('dialog.overlay');
    if (!overlay) return;
    overlay.innerHTML = renderOverlay(newIndex);
}

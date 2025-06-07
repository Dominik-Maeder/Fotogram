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
    <div class="img-container" onclick="openOverlay(event, ${i})">
        <img src="${img[i].src}" alt="${img[i].alt}">
        <p>${img[i].title}</p>
     </div>
    `
}

function openOverlay(e, i){
    e.preventDefault();
    let content  = document.getElementById('overlay');
    content.classList.toggle('d_none')
    content.innerHTML = renderOverlay(i)
}

function renderOverlay(i){
    return `
        <div class="overlay" onclick="preventDefault(event)">       
            <img src="${img[i].src}" alt="${img[i].alt}">
            <div class="navigation-btn">
                <p onclick="prevImg(${i}, event)"> <- </p>
                <p>${img[i].title}</p>  
                <p onclick="nextImg(${i})"> -> </p>
            </div>         
        </div>    
    `
}

function preventDefault(event){
    let content = document.getElementById('overlay')
    content.classList.toggle('d_none')
    event.stopPropagation();
}

function prevImg(i, event){
    event.preventDefault();
    console.log(i);
}

function nextImg(i) {
    console.log(i);
}
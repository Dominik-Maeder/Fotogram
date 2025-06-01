let img = [
    {
        src:'./assets/img/1.jpg',
        title: 'Test',
        alt: 'Test',
    },
    {
        src:'/assets/img/5.jpg',
        title: 'Test',
        alt: 'Test',
    },
    {
        src:'./assets/img/7.jpg',
        title: 'Test',
        alt: 'Test',
    },

    {
        src:'./assets/img/8.jpg',
        title: 'Test',
        alt: 'Test',
    },
    {
        src:'./assets/img/9.jpg',
        title: '',
        alt: '',
    },
    {
        src:'./assets/img/11.jpg',
        title: '',
        alt: '',
    },
    {
        src:'./assets/img/12.jpg',
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
    <div>
        <img src="${img[i].src}" alt="${img[i].alt}"></img>
        <p>${img[i].title}</p>
     </div>
    `
}
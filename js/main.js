/*Array dinamico di immagini*/
const imgarray = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
];

const carouseldom = document.querySelector('.carousel');
let carouselcnt = "";

for(i=0; i<imgarray.length; i++){
    const imgcontainer = `<div class="image-container">
                            <img class="img d-none" src="${imgarray[i]}" />
                            </div>`;   
    carouselcnt += imgcontainer;
}
    carouseldom.innerHTML = carouselcnt; 
/*Array dinamico di immagini*/
/*i Div contenenti le immagini vengono creati con class d-none*/
    let dispayedimg = 0;
    const imgcontainerdom = document.getElementsByClassName('img');
    imgcontainerdom[dispayedimg].classList.remove('d-none');
    
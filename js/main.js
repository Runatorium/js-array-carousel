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
    const imgcontainer = `<div class="image-container d-none">
                            <img class="img" src="${imgarray[i]}" />
                            </div>`;   
    carouselcnt += imgcontainer;
}
    carouseldom.innerHTML = carouselcnt; 
/*Array dinamico di immagini*/
/*i Div contenenti le immagini vengono creati con class d-none*/
    let dispayedimg = 0;
    const imgcontainerdom = document.getElementsByClassName('image-container');
    imgcontainerdom[dispayedimg].classList.remove('d-none');



    const nextarrowDom = document.querySelector('#arrow-ahead');
    const previousarrowDom = document.querySelector('#arrow-backwards');

    nextarrowDom.addEventListener('click', 
    function() {
        if (dispayedimg < imgcontainerdom.length - 1) {

            imgcontainerdom[dispayedimg].classList.add('d-none');
            dispayedimg++;
            imgcontainerdom[dispayedimg].classList.remove('d-none');

            previousarrowDom.classList.remove('std-position');

            
        } else {
            nextarrowDom.classList.add('hide-arrow');
         } 
    }
);


        previousarrowDom.addEventListener('click', 
        function() {
        if (dispayedimg > 0) {

            imgcontainerdom[dispayedimg].classList.add('d-none');
            dispayedimg--;
            imgcontainerdom[dispayedimg].classList.remove('d-none');
            
            nextarrowDom.classList.remove('hide-arrow')
                
         } else {
            previousarrowDom.classList.add('std-position');
        } 
     }
);
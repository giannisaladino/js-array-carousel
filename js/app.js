const arrayImages = [              //array - string
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp"
];

// recupero l'elemento 'items-container'

const itemsContainerDOMElement = document.querySelector('.items-container');

let itemsContent = '';

// inserisco all'interno degli 'items-container' le immagini

    // uso un ciclo for per iterare l'array arrayImages

for(let index = 0; index < arrayImages.length; index++) {

    const imagePath = arrayImages[index];

    const sliderItem = `
    <div class="item">
         <img src="${imagePath}">
    </div>
    `
    // per ogni elemento dell'array creo una parte di HTML

    itemsContent += sliderItem; 
}

itemsContainerDOMElement.innerHTML = itemsContent;


const divItem = document.getElementsByClassName('item');

// aggiungo la classe 'active' al primo item

let activeItemIndex = 0;
divItem[activeItemIndex].classList.add('active');

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

next.addEventListener('click', function(){

    // 1 tolgo la classe active dall'elemento corrente
    divItem[activeItemIndex].classList.remove('active');

    // 2 incremento di 1 l'item
    activeItemIndex++;

    // 3 aggiungo la classe active all'elemento incrementato
    divItem[activeItemIndex].classList.add('active');

})

prev.addEventListener('click', function(){

    // 1 tolgo la classe active dall'elemento corrente
    divItem[activeItemIndex].classList.remove('active');

    // 2 incremento di -1 l'item
    activeItemIndex--;

    // 3 aggiungo la classe active all'elemento incrementato
    divItem[activeItemIndex].classList.add('active');

})
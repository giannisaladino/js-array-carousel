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
divItem[0].classList.add('active');
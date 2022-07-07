const yesButton = document.querySelector('.yes');
const noButton = document.querySelector('.no');
const idiotButton = document.querySelector('.idiot');
const wrapper = document.querySelector('.wrapper');
const spans = document.querySelectorAll('span');

let xPosition = Math.round(Math.random() * 90);
let yPosition = Math.round(Math.random() * 90);
idiotButton.style.left = `+${xPosition}%`;
idiotButton.style.top = `+${yPosition}%`;

noButton.addEventListener('mouseover', () => {
    // console.log('clicked no');
    noButton.classList.add('hidden')
    idiotButton.classList.remove('hidden');
});

yesButton.addEventListener('click', () => {
    // console.log('clicked yes');
    wrapper.innerHTML = `<div><span class="ez">I knew it ;)</span></div>`
    idiotButton.classList.add('hidden');
});

let hoverCounter = 0;

idiotButton.addEventListener('mouseover', () => {
    // console.log('idiot button clicked');
    hoverCounter++;
    if(hoverCounter === 5){
        spans[0].classList.remove('hidden');
    } else if(hoverCounter === 10){
        spans[1].classList.remove('hidden');
    } else if(hoverCounter === 15){
        spans[2].classList.remove('hidden');
    }

    xPosition = Math.round(Math.random() * 90);
    yPosition = Math.round(Math.random() * 90);
    idiotButton.style.left = `+${xPosition}%`;
    idiotButton.style.top = `+${yPosition}%`; 
    // console.log(xPosition, yPosition);   
});

idiotButton.addEventListener('click', () => {
    wrapper.innerHTML = `<div><span class="ez">Alright I belive you</span></div>`
    idiotButton.classList.add('hidden');
});
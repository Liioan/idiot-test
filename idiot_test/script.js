const yesButton = document.querySelector('.yes');
const noButton = document.querySelector('.no');
const idiotButton = document.querySelector('.idiot');
const wrapper = document.querySelector('.wrapper');

noButton.addEventListener('click', () => {
    // console.log('clicked no');
    noButton.classList.add('hidden')
    idiotButton.classList.remove('hidden');
});

idiotButton.addEventListener('mouseover', () => {
    // console.log('idiot button clicked');
    let xPosition = Math.round(Math.random() * 90);
    let yPosition = Math.round(Math.random() * 90);
    idiotButton.style.left = `+${xPosition}%`;
    idiotButton.style.top = `+${yPosition}%`; 
    // console.log(xPosition, yPosition);   
});

yesButton.addEventListener('click', () => {
    // console.log('clicked yes');
    wrapper.innerHTML = `<div class.question-wrapper><span class="ez">I knew it ;)</span></div>`
    idiotButton.classList.add('hidden');
});
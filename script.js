
const adviceContainer = document.querySelector('.advice__box');
const btn = document.querySelector('.advice__dice');


const render = function(data) {
    const html = 
    `
    <h1 class="advice__heading">Advice ${data.slip.id}</h1>
    <p class="advice__paragraph">&ldquo;${data.slip.advice}&rdquo;</p>   
    `

    adviceContainer.innerHTML = " ";
    adviceContainer.insertAdjacentHTML('afterbegin', html);
}

btn.addEventListener('click', function(){
    fetch('https://api.adviceslip.com/advice')
    .then( res => res.json())
    .then(data => render(data));
});
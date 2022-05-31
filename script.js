
const container = document.querySelector('.advice');
const adviceContainer = document.querySelector('.advice__box');
const btn = document.querySelector('.advice__dice');
const heading = document.querySelector('.advice__heading');
const text = document.querySelector('.advice__paragraph');
const loader = document.querySelector('.loader');

const loading = function() {
    loader.hidden = false;
    container.classList.add('hidden');
}

const complete = function() {
    container.classList.remove('hidden');
    loader.hidden = true;
}

const getQuote = async function() {

    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const quote = await response.json();
        return quote;
    }
    catch(err) {
        console.log(err.message)
    }  
    
};

const render = async function() {
 
    loading()
    try {
    const data = await getQuote();
    const html = 
    `
    <h1 class="advice__heading">Advice ${data.slip.id}</h1>
    <p class="advice__paragraph">&ldquo;${data.slip.advice}&rdquo;</p>   
    `

    adviceContainer.innerHTML = " ";
    adviceContainer.insertAdjacentHTML('afterbegin', html);
    }
    catch(err) {
        console.log(err.message)
    }
    complete();
}



render();

btn.addEventListener('click', render);
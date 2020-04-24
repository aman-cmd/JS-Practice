const quote = document.getElementById('quote');
const author = document.getElementById('author');
const nextQuoteButton = document.getElementById('next-quote');
const colours = ['#34495e', '#9b59b6', '#2980b9', '#2ecc71', '#f1c40f', '#e67e22', '#e84393', '#c56cf0', '#4834d4', '#7158e2', '#039BE5', '#6D4C41'];

function quoteGenerator(){
    fetch("https://api.quotable.io/random")
    .then(response => response.json())
    .then(data => {
    console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = `--- ${data.author}`;
})
}

function changeBg(){
        document.body.style.background = colours[Math.floor(Math.random()*colours.length)];
}

nextQuoteButton.addEventListener('click', () => {
    quoteGenerator();
    changeBg();
});
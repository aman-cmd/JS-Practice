const currency_one_selected = document.getElementById('currency-one');
const currency_two_selected = document.getElementById('currency-two');
const amount_one_entered = document.getElementById('amount-one');
const amount_two_entered = document.getElementById('amount-two');
const swap = document.querySelector('.swap');
const exchangerate = document.getElementById('exchangerate');

// Function to fetch, calculate rates and convert.
function calculate(){
    const currency_one = currency_one_selected.value;
    //console.log(currency_one);
    const currency_two = currency_two_selected.value;
    //console.log(currency_two);
    fetch(`https://api.exchangeratesapi.io/latest?base=${currency_one}`)
    .then(response => response.json())
    .then(data => {
        const rate = data.rates[currency_two];
        //console.log(rate);
        exchangerate.innerHTML = `1 ${currency_one} = ${rate} ${currency_two}`;
        //console.log(exchangerate);
        amount_two_entered.value = (amount_one_entered.value * rate);
    })
}

currency_one_selected.addEventListener('input', calculate);
amount_one_entered.addEventListener('input', calculate);
currency_two_selected.addEventListener('change', calculate);
amount_two_entered.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    const temp = currency_one_selected.value;
    //console.log(temp);
    currency_one_selected.value = currency_two_selected.value;
    currency_two_selected.value =  temp;
    calculate();
});

calculate();




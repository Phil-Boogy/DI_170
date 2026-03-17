const currency1 = document.getElementById('currency1');
const currency2 = document.getElementById('currency2');
const results1 = document.getElementById('results1');
const results2 = document.getElementById('results2');
const btn = document.getElementById('btn');

let data
let fromCode, toCode

async function init() {
    const result = await (await fetch('https://v6.exchangerate-api.com/v6/5075b1736dc8363aa8f4360a/codes')).json()
    data = result.supported_codes
}

init()

function filterCurrencies(input, results) {
    const value = input.value.toLowerCase()
    results.innerHTML = ''
    if (value) {
        const filtered = data.filter(([code, name]) =>
            code.toLowerCase().includes(value) || name.toLowerCase().includes(value)
        )
        filtered.forEach(([code, name]) => {
            const div = document.createElement('div')
            div.textContent = `${code} - ${name}`
            div.addEventListener('click', () => {
                input.value = `${code} - ${name}`
                results.innerHTML = ''
            })
            results.appendChild(div)
        })
    }
}

async function convertCurrency() {
    const conversion = await (await fetch('https://v6.exchangerate-api.com/v6/5075b1736dc8363aa8f4360a/pair/EUR/GBP/AMOUNT'))
}

currency1.addEventListener('input', () => filterCurrencies(currency1, results1))
currency2.addEventListener('input', () => filterCurrencies(currency2, results2))
btn.addEventListener('click',

    `https://v6.exchangerate-api.com/v6/5075b1736dc8363aa8f4360a/pair/${currency1.value}/GBP/AMOUNT`
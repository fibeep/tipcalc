const display = document.querySelector('#display')
const billInput = document.querySelector('#bill')
const tipInput = document.querySelector('#tip')
const ppl = document.querySelector('#ppl')
const superTotal = document.querySelector('#super')

function calculateTip() {
    const billValue = billInput.value
    const tipValue = tipInput.value 
    const numPpl = ppl.value
    const tipAmount = (billValue * tipValue / 100) / numPpl
    const totalAmount = (billValue * tipValue / 100) + parseInt(billValue)
    display.innerHTML = tipAmount.toFixed(2)
    superTotal.innerHTML = totalAmount.toFixed(2)
}

billInput.addEventListener('input', calculateTip)
tipInput.addEventListener('input', calculateTip)
ppl.addEventListener('input', calculateTip)
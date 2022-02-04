// First, tell us your name
let yourName = "Charles Coley" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = 0 // Total

const credit = document.querySelector('#credit')

const gbPlusBtn = document.querySelector('#add-gb')
const gbMnsBtn = document.querySelector('#minus-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMnsBtn = document.querySelector('#minus-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMnsBtn = document.querySelector('#minus-sugar')
const cookieTotal = document.querySelector('#qty-total')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
function updateQtygb(displayQtygb) {
    let qtyGb = document.querySelector('#qty-gb')
    qtyGb.innerHTML = displayQtygb
    console.log(total)
}

function updateTotal(displayQtyTotal) {
    cookieTotal.innerHTML = displayQtyTotal
}

gbPlusBtn.addEventListener('click', function() {
    gb++
    total++
    updateQtygb(`${gb}`)
    updateTotal(`${total}`)
})

gbMnsBtn.addEventListener('click', function(e){
    if (gb > 0) {
        gb--
        total--
    }
    updateQtygb(`${gb}`)
    updateTotal(`${total}`)
})

// Chocolate Chip + and - buttons
function updateQtycc(displayQtycc) {
    let qtyCc = document.querySelector('#qty-cc')
    qtyCc.innerHTML = displayQtycc
}

ccPlusBtn.addEventListener('click', function() {
    cc++
    total++
    updateQtycc(`${cc}`)
    updateTotal(`${total}`)
})

ccMnsBtn.addEventListener('click', function(e){
    if (cc > 0) {
        cc--
        total--
    }
    updateQtycc(`${cc}`)
    updateTotal(`${total}`)
})

// Sugar Sprinkle + and - buttons
function updateQtysugar(displayQtysugar) {
    let qtySugar = document.querySelector('#qty-sugar')
    qtySugar.innerHTML = displayQtysugar
}

sugarPlusBtn.addEventListener('click', function() {
    sugar++
    total++
    updateQtysugar(`${sugar}`)
    updateTotal(`${total}`)
})

sugarMnsBtn.addEventListener('click', function(e){
    if (sugar > 0) {
        sugar--
        total--
    }
    updateQtysugar(`${sugar}`)
    updateTotal(`${total}`)
})
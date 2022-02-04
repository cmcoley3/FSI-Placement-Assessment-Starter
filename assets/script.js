// First, tell us your name
let yourName = "Charles Coley" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

const credit = document.querySelector('#credit')

const gbPlusBtn = document.querySelector('#add-gb')
const gbMnsBtn = document.querySelector('#minus-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMnsBtn = document.querySelector('#minus-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMnsBtn = document.querySelector('#minus-sugar')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
function updateQtygb(displayQtygb) {
    let qtyGb = document.querySelector('#qty-gb')
    qtyGb.innerHTML = displayQtygb
}

gbPlusBtn.addEventListener('click', function() {
    gb++
    updateQtygb(`${gb}`)
})

gbMnsBtn.addEventListener('click', function(e){
    if (gb > 0) {
        gb--
    }
    updateQtygb(`${gb}`)
})

// Chocolate Chip + and - buttons
function updateQtycc(displayQtycc) {
    let qtyCc = document.querySelector('#qty-cc')
    qtyCc.innerHTML = displayQtycc
}

ccPlusBtn.addEventListener('click', function() {
    cc++
    updateQtycc(`${cc}`)
})

ccMnsBtn.addEventListener('click', function(e){
    if (cc > 0) {
        cc--
    }
    updateQtycc(`${cc}`)
})

// Sugar Sprinkle + and - buttons
function updateQtysugar(displayQtysugar) {
    let qtySugar = document.querySelector('#qty-sugar')
    qtySugar.innerHTML = displayQtysugar
}

sugarPlusBtn.addEventListener('click', function() {
    sugar++
    updateQtysugar(`${sugar}`)
})

sugarMnsBtn.addEventListener('click', function(e){
    if (sugar > 0) {
        sugar--
    }
    updateQtysugar(`${sugar}`)
})
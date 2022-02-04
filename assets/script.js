// First, tell us your name
let yourName = "Charles Coley" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMnsBtn = document.querySelector('#minus-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMnsBtn = document.querySelector('#minus-cc')

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

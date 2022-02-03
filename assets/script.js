// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Kailyn Nacoste" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit') 
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
// HINT: You can delete this console.log after you no longer need it!
console.log('Gingerbread + button was clicked!')

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})
let gbTotal = document.querySelector('#qty-gb') 
gbPlusBtn.addEventListener('click', function (){
    gb = gb + 1
    console.log(gb)
    gbTotal.textContent = (gb)
})

// TODO: Hook up event listeners for the rest of the buttons
//Gingerbread Minus Button Event Listener
const gbMinusBtn = document.querySelector('#minus-gb')
gbMinusBtn.addEventListener('click', function(){
    console.log('Gingerbread - button was clicked!')
})
//Chocolate Chip Event Listener
const ccPlusBtn = document.querySelector('#add-cc')
ccPlusBtn.addEventListener('click', function(){
    console.log('Chocolate Chip + button was clicked!')
})
const ccMinusBtn = document.querySelector('#minus-cc')
ccMinusBtn.addEventListener('click', function(){
    console.log('Chocolate Chip - button was clicked!')
})

//Sugar Sprinkle Event Listener
const sugarPlusBtn = document.querySelector('#add-sugar')
sugarPlusBtn.addEventListener('click', function(){
    console.log('Sugar + button was clicked!')
})
const sugarMinusBtn = document.querySelector('#minus-sugar')
sugarMinusBtn.addEventListener('click', function(){
    console.log('Sugar - button was clicked!')
})

//When Gingerbread '-' button is clicked
gbMinusBtn.addEventListener('click', function (){
    gb = gb - 1
    console.log(gb)
    gbTotal.textContent = (gb)
})

//When Chocolate Chip '+' button is clicked
let ccTotal = document.querySelector('#qty-cc') 
ccPlusBtn.addEventListener('click', function (){
    cc = cc + 1
    console.log(cc)
    ccTotal.textContent = (cc)
})
//When Chocolate Chip '-' button is clicked
ccMinusBtn.addEventListener('click', function (){
    cc = cc - 1
    console.log(cc)
    ccTotal.textContent = (cc)
})
//When Sugar Sprinkle '+' button is clicked
let sugarTotal = document.querySelector('#qty-sugar') 
sugarPlusBtn.addEventListener('click', function (){
    sugar = sugar + 1
    console.log(sugar)
    sugarTotal.textContent = (sugar)
})
//When Sugar Sprinkle '-' button is clicked
sugarMinusBtn.addEventListener('click', function (){
    sugar = sugar - 1
    console.log(sugar)
    sugarTotal.textContent = (sugar)
})
//Changing the cookie quantity
let cookieTotal = document.querySelector('#qty-total')
function add(){
for(let i = 0; i < cookieTotal.length; i++);
return cookieTotal;
}
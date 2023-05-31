

// Prompt for User 

var sugar = prompt("Enter amount of sugar:")
var chocolate_chip = prompt("Enter amount of chocolate chips:")
var candy_canes = prompt("Enter amount of Candy Canes:")
var Flour = prompt("Enter amount of Flour:")
var vanilla_extract = prompt("Enter amount of vanilla extract (tsp):")

// Conversion Factors
var cups_of_sugar = sugar / (1/2) 
var cups_of_chocolate_chip = chocolate_chip / (3/4) 
var cups_of_candy_canes = candy_canes / (5)
var cups_of_flour = Flour / (3/2)

// Vanilla Extract conversion

var tsp_of_vanilla_extract = vanilla_extract 



if (cups_of_sugar >= 1) {
    var amount_of_sugar = Math.floor(cups_of_sugar)
}
if (cups_of_chocolate_chip >= 1) {
    var amount_of_chocolate_chip = Math.floor(cups_of_chocolate_chip)
}
if (cups_of_candy_canes >= 1) {
    var amount_of_candy_canes = Math.floor(cups_of_candy_canes)
}
if (cups_of_flour >= 1) { 
    var amount_of_flour = Math.floor(cups_of_flour)
 }

if (tsp_of_vanilla_extract >= 1) {
    var amount_of_vanilla_extract = Math.floor(tsp_of_vanilla_extract)
}

if (amount_of_sugar > 1 && amount_of_chocolate_chip && amount_of_candy_canes && amount_of_flour && amount_of_vanilla_extract > 1) {
    
    var output = "Tis works"
} else  {
    var output = "Tis does not work"
}




console.log(cups_of_sugar)
console.log(cups_of_chocolate_chip)
console.log(cups_of_candy_canes)
console.log(cups_of_flour)
console.log(amount_of_vanilla_extract)
console.log(output)




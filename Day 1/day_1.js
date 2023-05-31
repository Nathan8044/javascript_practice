

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

var tsp_of_vanilla_extract = vanilla_extract / 3 



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
var number_of_cookies = 1
if (amount_of_sugar > 1 && amount_of_chocolate_chip && amount_of_candy_canes && amount_of_flour && amount_of_vanilla_extract > 1) {
    if (amount_of_sugar >= number_of_cookies) {
        var number_of_cookies = amount_of_sugar
    } 
    if (amount_of_chocolate_chip < number_of_cookies) {
        
        var number_of_cookies = amount_of_chocolate_chip
    }

    if (amount_of_candy_canes < number_of_cookies){
        var number_of_cookies = amount_of_candy_canes
    }
    if (amount_of_flour < number_of_cookies) {
        var number_of_cookies = amount_of_flour
    }
    if (amount_of_vanilla_extract < number_of_cookies){
        var number_of_cookies = amount_of_vanilla_extract
    }

    
    
    var output = "You can make " + number_of_cookies + " cookies!!!!!!!!"
} else  {
    var output = "No cookies for you!"
}

console.log(output)




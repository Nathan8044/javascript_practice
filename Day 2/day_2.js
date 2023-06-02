// Description: This file contains the code for the day 2 assignment
var user_input = prompt("Please enter a positive integer: ")

var counter = 0 

console.log("Executing while-loop")
while (counter < user_input) {
    output = 1 + 2 * counter
    console.log(output)
    counter = counter + 1
}

console.log('Executing for-loop')
for (let counter = 0; counter < user_input; counter++) {
    
    output = 1 + 2 * counter
    console.log(output)


}
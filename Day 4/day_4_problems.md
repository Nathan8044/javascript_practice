# Practice Problems for Javascript & Python Day 4


Day 4 of Javascript Practice will go over Objects. We will be using Objects, and updating objects. 


Some Review before we get started
```
Object Example: 

const fav_colors = {

    Nathan: Green 
    Henry: Purple
    Umme: Yellow 

}

There are two methods for modifying what is in a object in Javascript

- Dot Method 

    console.log(fav_colors.Nathan) = Green

- Bracket Method 

    console.log(fav_colors['Nathan']) = Green 




```


## Problem 1 

You are a game developer and want to develop a matching game. You will need 9 button and each 9 buttons correlate to a value. After pressing the button the value of the clicked button is saved and a computer function is run with random values of 1-9. If the computer chosen value matches your chosen number, you lose. If it does not, you win. 

For when the match is a tie, if the computer picked number subtracted from your number is less than 0, then it is a tie. If not you win. 

You must also keep track of the score using an Object. In the object you must include the wins, losses, and ties. All of this information must be alerted to the user. 


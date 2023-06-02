# Day 2 Problems for Javascript and Python

For Day 2, we will be using what we learned in conditional statements and adding a larger concept to them. Today's lesson will revolve around loops. 

Loops are used to repeat repetive taks that developers and users would not want to maually due themselves over and over again. 

There will be some review located in this sections. It will consist of conditional statements and loops. 

```
Using if statements

    if (conditional name) {
        
        Insert function within statement 


    }

Using if & else statements 

    if (conditional name) {

        Insert function within statement is if statement is true

    } else {

        Insert function if the if statement is false 
    }

Using if, else if, & else statements 

    if (conditional name) {

        insert function if this if statement is true 

    } else if {

        Insert function if the first if statement above fails or    
        any other "else "if" statements do not work 

    } else {

        insert code for if all else fails 

    }

-------------------------------------------------------------------------------------------------
Using Loops:

Different types of loops 

- for: loops through a block of code a number of times 

- for/in: loops through the properties of an object 

- for/of: loops throughb the values of an iterable object

- while: loops through a block of code while a specified condition is true 

- do/while: also loops through a block of code while a specified condition is true 

Using the For Loop: 

    for (intial conditon; condtional expression; counter) {

        ...more statements

    }

    Ex. 

        for (let i=0; i<5; i++) {

            console.log("Hello World")

        }

        //Will log Hello world 5 times

Using the For in Loop: 

    for (key in object) {

        ...more statements
    }

    Ex. 
    const colors = {Nathan: Green, Sam: Yellow, Ren: Blue};

    for (let fav_colors in colors) {

        console.log(colors[fav_colors])
    }

    //will log only the colors of the people not their names. It indexes a dictionary. 

    ** Note that dictionary's and list's have not been reviewed because there is an expected  
       knowledge of coding. Lesson for more specific coding concepts will be introduced. You can do a quick google search for lists and dictionarys. Or click this link. 

       https://www.geeksforgeeks.org/difference-between-list-and-dictionary-in-python/

Using the For or loop: 


    for (variable of iterable item){
        ...more statements
    }

    Ex. 

        const colors = [Green, Yellow, Blue]; 

        for (let fav_color of colors) {

            console.log(fav_colors)
        }

        // Will log each color one by one in the list

Using a While Loop: 

    while (conditon) {

        ...more statements
        counter must also be included
    }

    Ex.

        while (i<10) {

            console.log("Hello World")
            i++;
        }

        Note: For a while loop you must include the counter in the end. This is because if you do not  
        include the counter the loop will run forever and in your code you do not want that. 


Difference between a For Loop and While Loop and when to use them: 

    If you have some experience with Python you know that it is best to use a For loop when you know the 
    end that you are want to reach. This means if you have a dictionary, you know that the start of the 
    dictionary and the end of it is all you want to iterate over. 

    A while loop is used for when you don't know the end, or don't have those specfic ranges like you 
    would see in the For loop. 


```

## Problem 1 Javascript & Python

**Problem provided by NYU** :)



Write a program that reads a positive integer (say, n), and prints the first n odd numbers (don't use n as a variable
name). Write two versions in the file, one using a for-loop, and one using a while-loop. For example, one
execution could look like this:

```
Please enter a positive integer: 5

Executing while-loop...
1
3
5
7
9

Executing for-loop...
1
3
5
7
9

Please note that the the prompt for Javascript will look different than for Python. The example input and output above is for Python. For Javascript, a prompt message will pop up on your browser. 


```
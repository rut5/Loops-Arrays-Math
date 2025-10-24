// guessNumberGame

function guessNumberGame() {

    let number10 = Math.floor(Math.random() * 10) + 1

    // console.log(number) just to see if it works

    let numberInput = prompt(`Guess a number from 1-10`)

    if (numberInput.includes(number10)) {
        console.log(`Yay! You guessed the right number`);
    } else {
        console.log(`That wasn't the right number. Try again`)
        // add more code here later for the user to be able to keep guessing the same number
    }

}

guessNumberGame();

// generateRandomArray

function generateRandomArray(length) {
    let number100 = []

    for (let i = 0; i < 3; i++) {
        number100.push(Math.floor(Math.random() * 100) + 1)
    } // adds 3 random numbers

    for (let i = 0; i < length; i++) {
        number100.push(Math.floor(Math.random() * 100) + 1)
    } // generate more numbers based of what number there is in the length, variabel (in this case 2)

    for (let i = 0; i < number100.length; i++) {
        console.log(number100[i]);
    }

}

generateRandomArray(2);

// I had trouble with this exercise even though I rewatched your videos, below is the code I started with but then changed my mind (because I need the for-loop)

/* let number100 = [Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1];
// array with 2 random numbers between 1-100

number100.push(Math.floor(Math.random() * 100) + 1)
// adds another random number to the array

console.log(number100[0])
console.log(number100[1])
console.log(number100[2]) */


/* EXERCISE 3: Calculate the sum of even numbers in the array  
 
Create a function sumEvenNumbers that accepts an array as an argument.  

Use a for loop to iterate through the array and calculate the sum of the even numbers.  

Return the sum of the even numbers. */

function sumEvenNumbers(array) {


}


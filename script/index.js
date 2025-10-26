// 1. guessNumberGame

function guessNumberGame() {

    let answer = Math.floor(Math.random() * 10) + 1

    // console.log(answer) just to see if it works
    let numInput = parseInt(prompt("Guess a number from 1-10"))
    let feedback = "wrong"

    while (numInput !== answer) {

        if (numInput > answer) {
            feedback = "lower";

        } else { feedback = "higher"; }

        numInput = parseInt(prompt("You guesssed " + numInput + ". The number is " + feedback + ". Try again."));

    }

    prompt("Yay! You guessed the right number");
}

guessNumberGame();


// 2. generateRandomArray

function generateRandomArray(length) {
    let num100 = [] // empty list

    for (let i = 0; i < length; i++) {
        num100.push(Math.floor(Math.random() * 100) + 1)
    } // generates the amount of numbers that is in the length variable (in this case 5)

    console.log(num100);

}

console.log("Start")

generateRandomArray(5);

console.log("End")

/* 
I had trouble with this exercise even though I rewatched your videos, below is the code I started with but then changed my mind (because I need the for-loop)

for (let i = 0; i < 3; i++) {
    num100.push(Math.floor(Math.random() * 100) + 1)
} adds 3 random numbers
let number100 = [Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1];
array with 2 random numbers between 1-100

number100.push(Math.floor(Math.random() * 100) + 1)
adds another random number to the array

console.log(number100[0])
console.log(number100[1])
console.log(number100[2]) */


// 3. sumEvenNumbers

function sumEvenNumbers(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sum += array[i]; // sum = sum + array[i]
        }
    }

    return sum;
}

console.log("The sum of even numbers in the array is: ")
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7]));

// in this case the answer is 12

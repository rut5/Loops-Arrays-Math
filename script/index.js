// 1. guessNumberGame

function guessNumberGame() {

    let answer = Math.floor(Math.random() * 10) + 1

    console.log(answer) //just to see if it works
    let numInput = parseInt(prompt("Guess a number from 1-10 " + "HINT it's " + answer))

    while (numInput !== answer) {
        console.log("You guesssed " + numInput + ". That wasn't the right number. Try again")
        numInput = parseInt(prompt("Guess a number from 1-10" + answer))
    }
    
    console.log(`Yay! You guessed the right number`);
}

guessNumberGame();


// 2. generateRandomArray

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


// 3. sumEvenNumbers

function sumEvenNumbers(array) {
    let sum = 0;

    for (let evenNum = 0; evenNum < array.length; evenNum++) {
        if (array[evenNum] % 2 === 0) {
            sum += array[evenNum];
        }
    }

    return sum;
}
    const numbers = [1, 2, 3, 4, 5, 6]
    const evenSum = sumEvenNumbers(numbers);

    console.log(evenSum);
// in this case, the sum of the even numbers = 12



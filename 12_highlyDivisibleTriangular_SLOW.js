/*
Find a triangular number that has more than 500 divisors.

Slow method. Simply brute forcing through every number and counting the number of divisors without a remainder.

Result: took 900 seconds to complete. The result is a number 76576500 with a total of 576 divisors. Total numbers checked is 12375.
*/

let numberLimit = 15000 //to limit number of for() loops
let divisorLimit = 500 // find the first number to have at least that many divisors
let timeStart // store start time of the program.

function isItDivisible(number, divisor){
    /*
    Function that checks if the number is divisible without a remainder
    */

    if(number % divisor === 0){
        return true
    } else {
        return false
    }

}

function returnNextTriangleNumber(previousNumber, currentPosition){
    /*
    Function that returns the next triangular number

    previousNumber - previous triangular number
    currentPosition - current position for the new number in the triangular number sequence
    */
    return previousNumber + currentPosition
}

function countNumberOfDivisors(number){
    /*
    Function that calculates how many natural divisors without remainder does the number have.
    */
    let numberOfDivisors = 0

    for(let i = 1; i <= number; i++){

        if(isItDivisible(number, i)){
            numberOfDivisors += 1
        }
    }

    return numberOfDivisors

}

function main(){

    let divisorCounter = 0
    let triangleNumber = 0
    let previousTriangleNumber = 0

    timeStart = Date.now()
    // loop through first "numberLimit" number of digits and check which has the highest number of divisors
    for(let i = 1; i <= numberLimit; i++){

        let currentTriangleNumber = returnNextTriangleNumber(previousTriangleNumber, i)
        previousTriangleNumber = currentTriangleNumber
        let currentDivisorCounter = countNumberOfDivisors(currentTriangleNumber)

        // check if current number has more divisors than previous stored number
        if(currentDivisorCounter > divisorCounter){
            divisorCounter = currentDivisorCounter
            triangleNumber = currentTriangleNumber
            console.log("Found the new number " + triangleNumber + " with highest number of divisors (" + divisorCounter + ")")
        }

        // if number of divisors is equal or above our set goal, stop the loop
        if(divisorCounter >= divisorLimit){
            console.log("Found the number with number of divisors higher than " + divisorLimit + ". A total of " + i + " numbers have been checked.")
            break
        }
    }

    console.log("Number " + triangleNumber + " has a total of " + divisorCounter + " divisors.")
    console.log("Operation completed in " + (Date.now() - timeStart)/1000 + " seconds")

}

// run probem solution
main()

/*
Find a triangular number that has more than 500 divisors.

Fast method. The trick I used here is that for every divisor we find, there is going to be another divisor on the other end of the range (quotient), unless the divisor is right in the middle (square root of the number we are checking). For example:

number 6 has divisors without remainder 1, 2, 3, 6. If we find 1, we can automatically count in quotient 6, because 1*6=6*1=6. Next we find 2, we can automatically count in quotient 3, because 2*3=3*2=6. There are no divisors in between those number that will be without remainder, so we no longer have to loop through every natural number up to the number we are checking. 

Exception is when there is a divisor right in the middle of the number:
number 9 has divisors 1, 3, 9. Since 3 is in the middle, we do not have to count in a quotient since it is the same number.

When do we stop checking? When our found divisor is equal to quotient OR quotient is smaller than the divisor without remainder.

Result: took ~0.2 seconds to complete. The result is a number 76576500 with a total of 576 divisors. Total numbers checked is 12375.
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
            let quotient = number / i
            // if divider is equal to the quotient, then add 1 to total count
            if(i === quotient){
                numberOfDivisors += 1
                break// break out of the loop, since we checked all divisors
            }

            // check if quotient is smaller than divisor. That means we checked all divisors
            if(quotient < i){break}

            // otherwise add 2 to total count as divisor and its quotient are both divisors for that number
            numberOfDivisors += 2
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

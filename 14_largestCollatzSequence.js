/*
ProjectEuler problem #14

Although not proven yet, Collatz sequences tend to finish at number 1. Collatz sequences are written as follows:
n -> n/2 (n is even)
n -> 3*n+1 (n is odd)

For example, sequance starting at 13 and finishing at 1: 13 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

Which starting number under one million produces the longest Collatz chain? Note: once the chain starts, the intermediate terms can go beyond one million.

Result: starting number under one million that produces the longest Collatz sequence is 837799. The sequence length is 525 numbers.

Note: operation is fast, completed in ~1.2 second.
*/

let numberLimiter = 1000000 // to limit the number of digits to be checked.
let longestCollatzSequenceCount = 0 // to store the longest Collatz sequence.
let longestCollatzSequenceNumber = 0 // to store the number that produces the longest Collatz sequence.
let timeStart // to store starting time.

function collatzSequence(digit){
    /*
    Function that calculates the Collatz sequence length.
    */
    
    let number = digit
    let sequenceCounter = 0
    
    // keep calculating sequence until the number becomes equal to 1 (assuming they all end up at 1 eventually...)
    while(number != 1){
        
        // depending on whether the number is even or odd, apply apropriate formula for next number
        if(number % 2 == 0){
        number = number / 2
        } else {
        number = 3 * number + 1
        }

        sequenceCounter++ // count the sequence up
    }

    return {"number": digit, "sequenceCounter": sequenceCounter + 1} // +1 is to include the starting number

}

function main(){

    timeStart = Date.now()
    
    // loop through all natural numbers up to one million
    for(let digit = 1; digit <= numberLimiter; digit++){
        // store the result of Collatz sequence for current number
        let result = collatzSequence(digit)
        
        // check if the sequence is longer than the one stored currently.
        if(result.sequenceCounter > longestCollatzSequenceCount){
            longestCollatzSequenceCount = result.sequenceCounter
            longestCollatzSequenceNumber = result.number
        }
    }
    
    console.log("The longest Collatz sequence belongs to number under one million is:")
    console.log("Number: " + longestCollatzSequenceNumber + ", Collatz sequence counter: " + longestCollatzSequenceCount)
    console.log("Operation completed in " + (Date.now() - timeStart)/1000 + " seconds")

}

// run probem solution
main()

// https://projecteuler.net/problem=5

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without remainder. What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20

// function to check if given number is divisible by all numbers from 1 to 20
function isItDivisibleByAllNumbers(number){

    // iterate through all multipliers 1 to 20
    for(multiplier = 1; multiplier <= 20; multiplier++){

        // if number is not divisible without remainder, return false
        if(number % multiplier != 0){
            return false
        }

    }
    
    return true
}

function smallestMultiple(limit){
    let smallestMultiple = null

    // search for smallest multiple. Limit parameter is to prevent loop from going to very high numbers and taking a long time
    for(number = 1; number < limit; number++){

        if(isItDivisibleByAllNumbers(number)){
            smallestMultiple = number
            break
        }

    }

    console.log("Smallest number divisible by all numbers from 1 to 20 is " + smallestMultiple)
}

//run function
smallestMultiple(999999999)

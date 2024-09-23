// https://projecteuler.net/problem=3

//Prime factors of 13195 are 5, 7, 13, 29. What is the largest prime factor of the number 600851475143?

let testNumber = 600851475143

function isPrimeNumber(number){
/*
function to check if the number is prime
*/
    for(i = 2; i < number; i++){

        if(number % i === 0){
            return false
        }

    }
    return true
}

function findNextFactor(number){
/*
function to find the next factor for the given number
*/
    for(j = 2; j <= number; j++){

        if(number % j === 0){
            return j
        }

    }
    return number
}

function largestPrimeFactor(number){
/*
function find the largest prime factor for the given number
*/
    let numberToTest = number
    let largestPrimeFactor = 1
    
    while(numberToTest / largestPrimeFactor != 1){
        //Find next factor
        let nextFactor = findNextFactor(numberToTest)
        
        //Test if factor is a prime number
        if(isPrimeNumber(nextFactor)){
            console.log("Prime factor found: " + nextFactor)

            //save prime factor if it is bigger than previous one
            if(nextFactor > largestPrimeFactor){
                largestPrimeFactor = nextFactor
            }
            
            // reduce the test number by the current largest prime factor
            numberToTest = numberToTest / largestPrimeFactor

            // check if number to test is reduced to 1, break the while loop if true
            if(numberToTest === 1){
                break
            }
        }
    }
    
    console.log("------------------------------------")
    console.log("Largest prime factor of the number " + number + " is " + largestPrimeFactor)
}

largestPrimeFactor(testNumber)

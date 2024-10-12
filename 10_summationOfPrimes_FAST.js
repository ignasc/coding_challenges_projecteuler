//NOTE: fast method. Took about 0.1 second on my machine to complete.

let numberOfDataPoints = 2000000
let resultSum = 0
let dataArray
let dataIndexArray

// function to build an array of all the numbers between 2 and two million.
function buildArray(limit, startingNumber = 2){
    let generatedArray = []

    for(let i = startingNumber; i <= limit; i++){
        generatedArray.push(i)
    }
    return generatedArray

}

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

function main(){
    /*
    Function that checks for prime number in data array. Uses https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes method to flag numbers that are not prime. To make it work with single array, each element, that is NOT a prime, will be replaced with -1. Then we simply add up all numbers that are positive, since those are left as prime numbers.
    */
    let startTime = null
    let endTime = null
    startTime = Date.now()
    dataArray = buildArray(numberOfDataPoints) // generate data array

    // since every prime multiple is NOT a prime, we only check numbers up to square root of two million.
    let iterationLimit = Math.sqrt(dataArray.length)

    // iterate through every number that is not flagged as negative (not a prime)
    for(let numberIndex = 0; numberIndex <= iterationLimit; numberIndex++){

        if(dataArray[numberIndex] < 0){continue}// if it is flagged as NOT prime, skip it

            let numberIsPrime = isPrimeNumber(dataArray[numberIndex])

            // check if number is prime
            if(numberIsPrime){
                let primeNumber = dataArray[numberIndex]
                let primeIndex = numberIndex
                
                // every multiple of prime number will NOT be a prime number, so we flag those to avoid checking them again later
                for(let j = primeNumber + primeIndex; j < dataArray.length; j = j + primeNumber){
                    dataArray[j] = -1
                }
            }
        }
        
        // add up all prime numbers (the ones that are not flagged as -1)
        for(let i = 0; i < dataArray.length; i++){

            if(dataArray[i] > 0){
                resultSum += dataArray[i]
            }
            
        }
        
        console.log("The sum of all prime numbers up to " + numberOfDataPoints + " is: " + resultSum)
        endTime = Date.now()
        console.log("Operation completed in " + (endTime - startTime)/1000 + " seconds")
        resultSum = 0 // reset the sum (delete once both calculation methods are separated

}

// run the function with problem solution
main()

// By listing the first six prime numbers : 2, 3, 5, 7, 11, 13, we can see that the 6th prime is 13. What is the 10001st prime number?

nthNumber = 10001

function isPrimeNumber(number){
    /*
    check if the number is prime
    */
    for(i = 2; i < number; i++){
        if(number % i === 0){
            return false
        }
    }

    return true
}

function findNextPrime(number){
    /*
    find the next prime number that is higher than supplied parameter
    */
    let nextNumber = number + 1
    let loopBreaker = 20000 // I hate infinite loops, so just in case...

    while(true){
        
        if(isPrimeNumber(nextNumber)){
            return nextNumber
        } else {
            nextNumber += 1
            loopBreaker -= 1

            // safety condition to prevent being stuck in infinite loop
            if(loopBreaker == 0){
                console.log("Infinite loop broken at number " + nextNumber)
                return nextNumber
            }
        }
    }
}

function findnthPrime(number){
    /*
    find the n'th prime number, where n is the supplied parameter "number"
    */
    let nthPrime = 0
    let counter = 0

    for(n = 0; n <= number; n++){
        nthPrime = findNextPrime(nthPrime)
        counter = n
    }

    console.log("------------------------------------")
    console.log("Prime number " + counter + " found: " + nthPrime)
}

// run solution
findnthPrime(nthNumber)

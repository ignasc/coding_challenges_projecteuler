//NOTE: slow method. Took 476 seconds on my machine to complete.

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
    Function that iterates through every number in the data array and checks if it is a prime number and adds it to the total sum.
    */
   let startTime = null // to store time before starting operation
   let endTime = null // to store time after finishing operation
   dataArray = buildArray(numberOfDataPoints) // generate data array
   startTime = Date.now()

   // check every number in data array if it is prime
   for(let i = 0; i < dataArray.length; i++){
        let isPrime = isPrimeNumber(dataArray[i])
        // if prime, then add it to total sum
        if(isPrime){
            resultSum += dataArray[i]
        }
    }

    console.log("The sum of all prime numbers up to " + numberOfDataPoints + " is: " + resultSum)
    endTime = Date.now()
    console.log("Operation completed in " + (endTime - startTime)/1000 + " seconds")

}

// run the function with problem solution
main()

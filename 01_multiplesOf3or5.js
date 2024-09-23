// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000

// check if number is multiple of 3 or 5
function multipleOfThreeFive(number){

    if(number % 3 === 0 || number % 5 === 0){
        return true
    }

    return false
}

// sum up all numbers that are multiples of 3 or 5 in the given range
function sumOfMultiplesThreeFive(number){

    let sumOfMultiples = 0

    for(i = 1; i < number; i++){

        if(multipleOfThreeFive(i)){
            sumOfMultiples += i
        }

    }

    console.log("The sum of all multiples of 3 or 5 in the range from 1-" + number + "(not included " + number + ") is: " + sumOfMultiples)
}

// run function
sumOfMultiplesThreeFive(1000)

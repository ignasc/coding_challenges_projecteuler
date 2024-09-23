// https://projecteuler.net/problem=6

// Find the  difference between the square of the sum of the first one hundred natural numbers and the sum of the squares of the first one hundred natural numbers

//P.S. If I am not mistaking, the original problem states "find the difference between the sum of the squares of the first ten natural numbers and the square of the sum", but example shows the difference of vice versa

// find the sum of all squared natural numbers between 1 and "number"
function sumOfSquares(number){
    let result = 0

    for(i = 1; i <= number; i++){
        result += i**2
    }

    return result
}

// find the square of the sum of all natural numbers between 1 and "number"
function squareOfSum(number){
    let result = 0

    for(i = 1; i <= number; i++){
        result += i
    }
     
    return result**2
}

// function to find different between square of sum and sum of squares
function sumSquareDiff(number){
    let squareOfSumResult = squareOfSum(number)
    let sumOfSquaresResult = sumOfSquares(number)

    console.log("The difference between the square of the sum and the sum of the squares of all natural numbers between 1 and " + number + " is:\n")
    console.log("Square of the sum: " + squareOfSumResult + "\nSum of the squares: " + sumOfSquaresResult)
    console.log("Difference: " + squareOfSumResult + " - " + sumOfSquaresResult + " = " + (squareOfSumResult - sumOfSquaresResult))
}

// run function
sumSquareDiff(5)

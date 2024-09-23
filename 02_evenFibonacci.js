// https://projecteuler.net/problem=2

//Find the sum of all even-valued Fibonacci sequence numbers, whose values do not exceed four million.

function sumfib(){

    let limit = 4000000
    let firstNumber = 1
    let secondNumber = 1
    let fibSum = 0

    console.log(firstNumber + "\n" + secondNumber)

    while(firstNumber + secondNumber < limit){

        let nextFibNumber = firstNumber + secondNumber

        // add even-valued fib numbers to the sum
        if(nextFibNumber % 2 === 0){
            fibSum += nextFibNumber
        }

        // set first number as second
        firstNumber = secondNumber

        // set second number as sum of previous two
        secondNumber = nextFibNumber

        console.log(nextFibNumber)
    }

    console.log("\nSum of all even-valued Fibonacci numbers up to " + limit + ": " + fibSum)
}

 // run function
sumfib()

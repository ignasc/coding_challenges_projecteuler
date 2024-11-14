/*
ProjectEuler problem #16

2^15 = 32786 and the sum of its digits is 3+2+7+8+6=26

What is the sum of the digits of 2^1000

Result: the sum of all digits of the number 2^1000 is 1366
*/

// main function
function main(power){

    let timeStart = Date.now() // to store starting time.
    let multiplicationCounter = power - 1 // how many times to multiply the number
    let resultNumber = [2] // storing initial value and all subsequent digits of the resulting number
    let digitSum = 0 // to store the sum of all digits of the resulting number

    while(multiplicationCounter > 0){

        let overflow = 0 // to store tenth positions that will be used for next digit multiplication

        for(let i = resultNumber.length - 1; i >= 0; i--){

            let multiplicationResult = resultNumber[i] * 2

            // if result is >9, we store the tenth digit as overflow for next iteration.
            if(multiplicationResult > 9){
                let numberString = multiplicationResult.toString()
                resultNumber[i] = parseInt(numberString[1]) + overflow // first add previous overflow to current result if there was one stored
                overflow = parseInt(numberString[0]) // then store current overflow for the next iteration result
            } else {
                resultNumber[i] = multiplicationResult + overflow // add overflow from previous result to current summation if there was one stored
                overflow = 0 // reset the overflow variable for next iteration
            }
        }

        // if we finish going through all the resultNumber digits and we still have an overflow variable >0, that means the whole result has increased by one digit (ex.: 51*2=102  -> went from 2-digit to 3-digit result). Therefore lets add the overflow as a new digit to the front
        if(overflow > 0){
            resultNumber.unshift(overflow)
        }

        multiplicationCounter--

    }

    // sum up all digits.
    for(let i = 0; i < resultNumber.length; i++){
        digitSum += resultNumber[i]
    }

    console.log("2 raised to the power of " + power + " is:")
    console.log(resultNumber.join(""))
    console.log("The sum of the digits of the number above is " + digitSum)
    console.log("Operation completed in " + (Date.now() - timeStart)/1000 + " seconds")

}

// run probem solution
main(1000)

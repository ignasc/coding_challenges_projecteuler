// https://projecteuler.net/problem=4

// A palindromic numbers reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 x 99. Find the largest palindrome made from the product of two 3-digit numbers.

// function to check if the number is palindrome
function isNumberPalindrome(number){
    let string = number.toString()
    let stringIndexLength = string.length - 1

    // iterate through digits and compare each with itself backwards
    for(i = 0; i <= stringIndexLength; i++){
        if(string[i] != string[stringIndexLength - i]){
            return false
        }
    }
    return true
}

// function to iterate through multipliers
function largestPalindrome(multiplierDigitLimit){
    let multiplierLimit = 10**multiplierDigitLimit // and I thought power operator was ^. Learned something new!
    let startingNumber = multiplierLimit / 10
    let largestPalindrome = 0
    let firstMultiplierForLargestPalindrome
    let secondMultiplierForLargestPalindrome

    // iterate through first multiplier
    for(firstMultiplier = startingNumber; firstMultiplier < multiplierLimit; firstMultiplier++){

        //iterate through second multiplier
        for(secondMultiplier = startingNumber; secondMultiplier < multiplierLimit; secondMultiplier++){
            
            let product = firstMultiplier * secondMultiplier

            // check if the product of multipliers is palindrome
            if(isNumberPalindrome(product)){

                // if new palindrome is bigger than current, store it and it's multipliers
                if(largestPalindrome < product){
                    largestPalindrome = product
                    firstMultiplierForLargestPalindrome = firstMultiplier
                    secondMultiplierForLargestPalindrome = secondMultiplier
                }

            }

        }

    }
    console.log("The largest palindrome made from two " + multiplierDigitLimit + "-digit numbers is: " + firstMultiplierForLargestPalindrome + " x " + secondMultiplierForLargestPalindrome + " = " + largestPalindrome)
}

// run function
largestPalindrome(3)

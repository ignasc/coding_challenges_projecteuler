/*
ProjectEuler problem #17

If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3+3+5+4+4=19 letters used in total.

How many letters would be used to write out all numbers from 1 to 1000 (inclusive)?

Note: do not count spaces and hyphens, for example 342(three hundred and forty-two) has 23 letters and 115 (one hundred and fifteen) has 20 letters. The use of "and" when writing out numbers is in compliance with British usage.

Result: 21084 letters needed to write down all numbers from 1 to 1000 using words.
*/

// list of single digit numbers and their letter counts
let numberDictionarySingles = {
    1:3,//one
    2:3,//two
    3:5,//three
    4:4,//four
    5:4,//five
    6:3,//six
    7:5,//seven
    8:5,//eight
    9:4,//nine
}

// list of double digit numbers and their letter counts
let numberDictionaryDoubles = {
    10:3,//ten
    11:6,//eleven
    12:6,//twelve
    13:8,//thirteen
    14:8,//fourteen
    15:7,//fifteen
    16:7,//sixteen
    17:9,//seventeen
    18:8,//eighteen
    19:8,//nineteen
    20:6,//twenty
    30:6,//thirty
    40:5,//forty
    50:5,//fifty
    60:5,//sixty
    70:7,//seventy
    80:6,//eighty
    90:6,//ninety
}

// letter count for 100
let numberDictionaryTriples = {
    100:7,//hundred
}

// letter count of 1000
let numberDictionaryFours = {
    1000:8,//thousand
}

function numberToLetterCount(number){
    /*
    Function that returns the total number of letters needed to write given number
    */
    let totalCount = 0
    let numberString = number.toString()
    let andWordCount = 3 // number of letters to add when the word "and" is used
    let andWordFlag = false // when "and" is needed to count in after hundreds

    // loop through all digits and add up number of letters needed for each number to write
    for(let digit = 0; digit < numberString.length; digit++){

        // skip if it is zero
        if(numberString[digit] == "0"){continue}

        // wording for thousands
        if(numberString.length - digit == 4){
            totalCount += numberDictionarySingles[numberString[digit]] + numberDictionaryFours[1000]
            andWordFlag = true // we will need the word "and" if there are any hudreds or single digits after a thousand
        }

        // wording for hundreds
        if(numberString.length - digit == 3){
            totalCount += numberDictionarySingles[numberString[digit]] + numberDictionaryTriples[100]
            andWordFlag = true // we will need the word "and" if there are any single digits after a hundred
        }

        // wording for tens
        if(numberString.length - digit == 2){
            totalCount += numberDictionaryDoubles[numberString[digit] + "0"]
            
            //+3 is for letter count in the word "and" if needed.
            if(andWordFlag){
                totalCount += andWordCount
                andWordFlag = false // we reset the "and" word flag as we only use it once writing a number
            }
        }

        // wording for single digits
        if(numberString.length - digit == 1){
            totalCount += numberDictionarySingles[numberString[digit]]

            if(andWordFlag){
                totalCount += andWordCount
                andWordFlag = false // we reset the "and" word flag as we only use it once writing a number
            }
        }
    }

    return totalCount

}

// main function
function main(maxNumber){
    let timeStart = Date.now() // to store starting time.
    let totalLetterCount = 0

    // this function only works with numbers up to and including 9999
    if(maxNumber > 9999){
        console.log("Please use number between 1 and 9999.")
        return
    }
    
    // loop through all numbers and calculate number of letters
    for(let number = 0; number <= maxNumber; number++){
        let result = numberToLetterCount(number)
        totalLetterCount += result
    }

    console.log("The number of letters needed to write all numbers in words between 1 and " + maxNumber + " is: " + totalLetterCount)
    console.log("Operation completed in " + (Date.now() - timeStart)/1000 + " seconds")

}

// run probem solution
main(1000)

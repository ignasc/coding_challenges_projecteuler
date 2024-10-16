/*
Find the greatest product of 4 adjacent numbers in the number grid. Adjacent numbers can be horizontal, vertical or diagonal.

NOTE: this is the first working revision of the program.
*/

let numberGrid = [
    [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8, ],
    [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0, ],
    [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65, ],
    [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91, ],
    [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80, ],
    [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50, ],
    [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70, ],
    [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21, ],
    [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72, ],
    [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95, ],
    [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92, ],
    [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57, ],
    [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58, ],
    [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40, ],
    [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66, ],
    [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69, ],
    [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36, ],
    [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16, ],
    [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54, ],
    [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48, ],
]

function formatGridForPrintout(result){
    /*
    function that returns a string where all numbers are arranged in a table with numbers of the highest product highlighted.
    */

    // starting header for the table
    let stringGrid ="Column > |  0 |  1 |  2 |  3 |  4 |  5 |  6 |  7 |  8 |  9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 |\n   Row v |----------------------------------------------------------------------------------------------------\n"

    // loop through all rows in the number array
    for(let row = 0; row < numberGrid.length; row++){
        // shift the row to the right to align with column arrow
        let rowArray = "      "
        //add row number, align single digit numbers with double digits.
        if(row <= 9){
            rowArray += (" " + row + " |")
        } else {
            rowArray += row + " |"
        }
        
        // loop through every column in the number grid
        for(let column = 0; column < numberGrid[row].length; column++){
            // format the number based on whether it is a single or a double digit.
            if(numberGrid[row][column] <= 9){
                // check if the number is one of the results and highlight it if it is. (this is for single digit numbers)
                if((row == result.row1 && column == result.col1) || (row == result.row2 && column == result.col2) || (row == result.row3 && column == result.col3) || (row == result.row4 && column == result.col4)){
                    rowArray += "| " + numberGrid[row][column] + "| "
                } else {
                    rowArray += "  " + numberGrid[row][column] + "  "
                }
            } else {
                // check if the number is one of the results and highlight it if it is. (this is for double digit numbers)
                if((row == result.row1 && column == result.col1) || (row == result.row2 && column == result.col2) || (row == result.row3 && column == result.col3) || (row == result.row4 && column == result.col4)){
                    rowArray += "|" + numberGrid[row][column] + "| "
                } else {
                    rowArray += " " + numberGrid[row][column] + "  "
                }
            }
        }
        
        // add a new line to the end of the string and concatinate with the rest of the table string
        stringGrid += (rowArray + "\n")

    }
    
    return stringGrid

}

function checkGridValidity(row, column){
    /*
    Function to check if we do not go outside of grid when checking for adjacent numbers.
    
    We first check if the row does not go out of bounds and then we check if column in that row does not go out of bounds. If we check both at the same time, then program throws an error when row is out of bounds, results in attempt to check undefined[column].
    */

    if( numberGrid[row] ){
        return numberGrid[row][column] ? true : false
    }
    return false

}

function checkVertical(row, column){
    /*
    function to check the product of 4 digits vertically in grid
    */
   
    let result = {}
    
    // check if we have 4 numbers vertically up

    let row1 = row
    let row2 = row - 1
    let row3 = row - 2
    let row4 = row - 3
    let col1 = column
    let col2 = column
    let col3 = column
    let col4 = column

    if( checkGridValidity(row4, col4) ){
        let numberProduct = numberGrid[row1][col1] * numberGrid[row2][col2] * numberGrid[row3][col3] * numberGrid[row4][col4]
        result.product = numberProduct
        result.number1 = numberGrid[row1][col1]
        result.number2 = numberGrid[row2][col2]
        result.number3 = numberGrid[row3][col3]
        result.number4 = numberGrid[row4][col4]
        result.direction = "vertically up"
        result.row1 = row1
        result.col1 = col1
        result.row2 = row2
        result.col2 = col2
        result.row3 = row3
        result.col3 = col3
        result.row4 = row4
        result.col4 = col4

    }
    
    // check if we have 4 numbers vertically down and compare result to previous one
    row1 = row
    row2 = row + 1
    row3 = row + 2
    row4 = row + 3
    col1 = column
    col2 = column
    col3 = column
    col4 = column
    
    if( checkGridValidity(row4, col4) ){

        let numberProduct = numberGrid[row1][col1] * numberGrid[row2][col2] * numberGrid[row3][col3] * numberGrid[row4][col4]

        if(numberProduct > result.product){
            result.product = numberProduct
            result.number1 = numberGrid[row1][col1]
            result.number2 = numberGrid[row2][col2]
            result.number3 = numberGrid[row3][col3]
            result.number4 = numberGrid[row4][col4]
            result.direction = "vertically down"
            result.row1 = row1
            result.col1 = col1
            result.row2 = row2
            result.col2 = col2
            result.row3 = row3
            result.col3 = col3
            result.row4 = row4
            result.col4 = col4
        }
    }
    
    return result

}

function checkHorizontal(row, column){
    /*
    function to check the product of 4 digits horizontally in grid
    */
    
    let result = {}
    
    // check if we have 4 numbers horizontally left

    let row1 = row
    let row2 = row
    let row3 = row
    let row4 = row
    let col1 = column
    let col2 = column - 1
    let col3 = column - 2
    let col4 = column - 3
    
    if( checkGridValidity(row4, col4) ){

        let numberProduct = numberGrid[row1][col1] * numberGrid[row2][col2] * numberGrid[row3][col3] * numberGrid[row4][col4]

        result.product = numberProduct
        result.number1 = numberGrid[row1][col1]
        result.number2 = numberGrid[row2][col2]
        result.number3 = numberGrid[row3][col3]
        result.number4 = numberGrid[row4][col4]
        result.direction = "horizontally left"
        result.row1 = row1
        result.col1 = col1
        result.row2 = row2
        result.col2 = col2
        result.row3 = row3
        result.col3 = col3
        result.row4 = row4
        result.col4 = col4

    }
    
    // check if we have 4 numbers horizontally right and compare result to previous one

    row1 = row
    row2 = row
    row3 = row
    row4 = row
    col1 = column
    col2 = column + 1
    col3 = column + 2
    col4 = column + 3

    if( checkGridValidity(row4, col4) ){
        
        let numberProduct = numberGrid[row1][col1] * numberGrid[row2][col2] * numberGrid[row3][col3] * numberGrid[row4][col4]
        
        if(numberProduct > result.product){
            result.product = numberProduct
            result.number1 = numberGrid[row1][col1]
            result.number2 = numberGrid[row2][col2]
            result.number3 = numberGrid[row3][col3]
            result.number4 = numberGrid[row4][col4]
            result.direction = "horizontally right"
            result.row1 = row1
            result.col1 = col1
            result.row2 = row2
            result.col2 = col2
            result.row3 = row3
            result.col3 = col3
            result.row4 = row4
            result.col4 = col4
        }
    }
    
    return result

}

function checkDiagonal(row, column){
   /*
   function to check the product of 4 digits diagonally in grid
   */
   let result = {}
   
   // check if we have 4 numbers diagonally up and right
    let row1 = row
    let row2 = row - 1
    let row3 = row - 2
    let row4 = row - 3
    let col1 = column
    let col2 = column + 1
    let col3 = column + 2
    let col4 = column + 3

    if( checkGridValidity(row4, col4) ){
        
        let numberProduct = numberGrid[row1][col1] * numberGrid[row2][col2] * numberGrid[row3][col3] * numberGrid[row4][col4]
        
        result.product = numberProduct
        result.number1 = numberGrid[row1][col1]
        result.number2 = numberGrid[row2][col2]
        result.number3 = numberGrid[row3][col3]
        result.number4 = numberGrid[row4][col4]
        result.direction = "diagonally up and right"
        result.row1 = row1
        result.col1 = col1
        result.row2 = row2
        result.col2 = col2
        result.row3 = row3
        result.col3 = col3
        result.row4 = row4
        result.col4 = col4
    }
    
    // check if we have 4 numbers diagonally right and down

    row1 = row
    row2 = row + 1
    row3 = row + 2
    row4 = row + 3
    col1 = column
    col2 = column + 1
    col3 = column + 2
    col4 = column + 3

    if( checkGridValidity(row4, col4) ){
        
        let numberProduct = numberGrid[row1][col1] * numberGrid[row2][col2] * numberGrid[row3][col3] * numberGrid[row4][col4]
        
        if(numberProduct > result.product){
            result.product = numberProduct
            result.number1 = numberGrid[row1][col1]
            result.number2 = numberGrid[row2][col2]
            result.number3 = numberGrid[row3][col3]
            result.number4 = numberGrid[row4][col4]
            result.direction = "diagonally right and down"
            result.row1 = row1
            result.col1 = col1
            result.row2 = row2
            result.col2 = col2
            result.row3 = row3
            result.col3 = col3
            result.row4 = row4
            result.col4 = col4
        }
    }
    
    // check if we have 4 numbers diagonally down and left

    row1 = row
    row2 = row + 1
    row3 = row + 2
    row4 = row + 3
    col1 = column
    col2 = column - 1
    col3 = column - 2
    col4 = column - 3

    if( checkGridValidity(row4, col4) ){
        
        let numberProduct = numberGrid[row1][col1] * numberGrid[row2][col2] * numberGrid[row3][col3] * numberGrid[row4][col4]
        
        if(numberProduct > result.product){
            result.product = numberProduct
            result.number1 = numberGrid[row1][col1]
            result.number2 = numberGrid[row2][col2]
            result.number3 = numberGrid[row3][col3]
            result.number4 = numberGrid[row4][col4]
            result.direction = "diagonally down and left"
            result.row1 = row1
            result.col1 = col1
            result.row2 = row2
            result.col2 = col2
            result.row3 = row3
            result.col3 = col3
            result.row4 = row4
            result.col4 = col4
        }
    }
    // check if we have 4 numbers diagonally left and up

    row1 = row
    row2 = row - 1
    row3 = row - 2
    row4 = row - 3
    col1 = column
    col2 = column - 1
    col3 = column - 2
    col4 = column - 3

    if( checkGridValidity(row4, col4) ){
        
        let numberProduct = numberGrid[row1][col1] * numberGrid[row2][col2] * numberGrid[row3][col3] * numberGrid[row4][col4]
        
        if(numberProduct > result.product){
            result.product = numberProduct
            result.number1 = numberGrid[row1][col1]
            result.number2 = numberGrid[row2][col2]
            result.number3 = numberGrid[row3][col3]
            result.number4 = numberGrid[row4][col4]
            result.direction = "diagonally left and up"
            result.row1 = row1
            result.col1 = col1
            result.row2 = row2
            result.col2 = col2
            result.row3 = row3
            result.col3 = col3
            result.row4 = row4
            result.col4 = col4
        }
    }
    
    return result

}

function main(){
    /*
    function that loops through all numbers in the grid and checks the product of 4 adjacent numbers in all directions: vertically, horizontally and diagonally. Finds the highest product.
    */
   
    let result = {"product": 0} // initial parameter

    // loop through every row in the number grid
    for(let row = 0; row < numberGrid.length; row++){
        // loop through every column in the number grid
        for(let column = 0; column < numberGrid[row].length; column++){
            // return the highest product of 4 adjacent numbers in each of the 3 directions
            let resultVertical = checkVertical(row, column)
            let resultHorizontal = checkHorizontal(row, column)
            let resultDiagonal = checkDiagonal(row, column)
            // select the result with the highest product
            let checkFirst = resultVertical.product < resultHorizontal.product ? resultHorizontal : resultVertical
            let checkSecond = checkFirst.product < resultDiagonal.product ? resultDiagonal : checkFirst
            // check if the highest selected product is bigger than currently stored one
            if(checkSecond.product > result.product){
                result = checkSecond
            }
        }

    }

    // return results in a user friendly format

    console.log("Number grid:")
    console.log(formatGridForPrintout(result))
    console.log("Largest product is found " + " at row " + result.row1 + " and column " + result.col1 + " and moving " + result.direction)
    console.log("The result is:\n" + result.number1 + " x " + result.number2 + " x " + result.number3 + " x " + result.number4 + " = " + result.product)
}

// run solution to the problem
main()

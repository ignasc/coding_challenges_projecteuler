/*
ProjectEuler problem #15

Starting at the top left corner of a 2x2 grid and being able to move only to the right and down, there are exactly 6 routes you can take to get to bottom right corner.

How many routes can you take to get from top left to bottom right corner in a 20x20 grid?

Result: 137846528820.
*/

function generateGridArray(gridSize){
    /*
    function that returns an array of the specified size, filled up with ones
    */
    let array = []
    
    for(let i = 0; i < gridSize; i++){
        let tempArray = []
        
        for(let j = 0; j < gridSize; j++){
            tempArray.push(1)
        }
        
        array.push(tempArray)

    }

    return array

}

function countNumberOfPaths(array){
    /*
    function that calculates total number of paths you can take from top left to bottom right corner
    */
    let calculatedArray = array
    let gridSize = array.length

    //loop through all rows
    for(let row = 0; row < gridSize; row++){
        //loop through all columns, starting at index 1, not 0.
        for(let column = 1; column < gridSize; column++){
            /*
            note: we generated initial array with all ones for a reason. Since starting position does not have any possible paths to come from, we skip it in this loop, starting at column index 1. The reason starting position is set as 1 is because this number will be used for further summations. If it was set to zero, all further summations would result in zeroes.
            */
            
            //account for being near the edge when adding up possible path numbers
            let previousRowPresent
            
            if(row - 1 < 0){
                previousRowPresent = 0 // if we're at top edge, there is nothing to add from "previous" row
            } else {
                previousRowPresent = calculatedArray[row-1][column]
            }

            previousColPresent = true

            if(column - 1 < 0){
                previousColPresent = 0 // if we're at the left edge, there is nothing to add from "previous" column
            } else {
                previousColPresent = calculatedArray[row][column-1]
            }

            calculatedArray[row][column] = previousRowPresent + previousColPresent

        }

    }

    return calculatedArray

}

// main function
function main(gridSize){

    let timeStart = Date.now() // to store starting time.

    console.log("Grid size: " + gridSize + " x " + gridSize)

    //console.log(generateGridArray(gridSize + 1))
    //console.log(countNumberOfPaths(generateGridArray(gridSize + 1)))

    let totalNumberOfRoutes = countNumberOfPaths(generateGridArray(gridSize + 1))

    //console.log(totalNumberOfRoutes)
    console.log("Total number of possible routes to go from top left to bottom right corner in a " + gridSize + "x" + gridSize + " grid is " + totalNumberOfRoutes[gridSize][gridSize] + ".")
    console.log("Operation completed in " + (Date.now() - timeStart)/1000 + " seconds")

}

// run probem solution
main(20)

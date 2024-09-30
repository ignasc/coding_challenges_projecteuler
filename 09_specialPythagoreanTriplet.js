/*Find natural numbers a, b and c, so that a^2+b^2+c^2=1000. What is the product of a,b and c?*/

let target = 1000
let counterLimit = 32
let resultProduct = 0
let resultA = 0
let resultB = 0
let resultC = 0

function sumOfSquares(a, b, c){
    return a**2+b**2+c**2
}

function main(){
    //Iterate through A
    for(let a = 1; a < counterLimit; a++){
        //Iterate through B
        for(let b = 1; b < counterLimit; b++){
            //Iterate through C
            for(let c = 1; c < counterLimit; c++){
                //Check if a^2+b^2+c^2=1000
                if(sumOfSquares(a, b, c) == target){
                    resultA = a
                    resultB = b
                    resultC = c
                    resultProduct = a * b * c
                }
            }
        }
    }
    
    console.log("The result: a^2 + b^2 + c^2 = " + resultA + "^2+" + resultB + "^2+" + resultC + "^2=" + target)
    console.log("The product: a*b*c=" + resultA + "*" + resultB + "*" + resultC + "=" + resultProduct)

}

// run the function with problem solution
main()

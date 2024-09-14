// Fizzbuzz solver. Print out first 100 numbers: if number is multiples of 3, replace it with the word fizz, if the number is multiples of 5, replace it with the word buzz and if the number is multiples of 3 and 5, replace it with word fizzbuzz.
// Not on the website, but I thought it was a fun challenge to add

function fizzbuzzsolver(){

    for(i = 1; i <= 100; i++){
  
      // check if number is divisible by 3 and 5
      if(i % 3 === 0 && i % 5 === 0){
        console.log(i + ": fizzbuzz")
        continue
      }

      // check if number is divisible by 3
      if(i % 3 === 0){
        console.log(i + ": fizz")
        continue
      }
  
      // check if number is divisible by 5
      if(i % 5 === 0){
        console.log(i + ": buzz")
        continue
      }
  
      // print the number
      console.log(i)
    }
  }
  
  //run function
  fizzbuzzsolver()

## Coding challenges from ProjectEuler website

This is where I will be posting solutions to coding challenges, that are found in the [Project Euler archives](https://projecteuler.net/archives)

### Main challenges
- Solve the problems without using any code that has not been written by me.
- I can only lookup certain math formulas or definitions of what the challenge is asking (eg. lookup what is a prime number, but NOT how to check if the number is prime)
- Write clean, simple and readable code.
- Where possible, try to write abstract code so it can solve the problem with different initial parameters.

## The problems and short summary

Short summary and thoughts about each problem.

## Warning, contains spoilers on how to solve it!

### Problem #00

This one is not listed on the website, hence why I numbered it as 00, I just thought it would be a fun challenge to try and add to this collection. I read online that this problem creates a challenge even for experienced people, who work as software developers. I do not know whether that statement is true or not, but overall the challenge was not that difficult to crack.

Printing out first 100 numbers and if the number is multiples of 3, replace it with the word "fizz", if it is multiples of 5, replace it with the workd "buzz" and if it is multiples of 3 AND 5, replace it with the word "fizzbuzz".

So basically just 3 conditions to check and print either the number of one of the words.

### Problem #01

A very simple problem because I did not have to do any research outside of the problem description: conditions are clear. The number needs to be divisible by 3 AND 5 without a remainder. That is the main conditional statement to check while looping through all natural numbers. Kind of similar to the problem I added myself to the list, number #00

### Problem #02

Another very simple problem, just with a little more thinking. Once again, sample on the website was enough to figure out how to generate fibonacci numbers and the rest was just writing the right conditions to check which numbers should be added up and when to stop the sum.

### Problem #03

Just like problem #02, this did not need any additional research doing outside of the description presented on the website. It is mainly just making sure I can find the factors of the given number and check if those factors are prime numbers.

### Problem #04

This problem was a little bit trickier than the previous ones in a way that I had to figure out how to check if the number is writen the same way in both ways: forwards and backwards. I couldn't come up with a math expression that would reverse the number, so I chose what I think is a more primitive, but a simple solution: convert the number to a string, loop through each character of the string and compare it to respective character on the opposite end of the string.

### Problem #05

This problem is very simple to solve. I just looped through all natural numbers and checked if the number is divisible by all numbers from 1 to 20 without a remainder. I just realise as I write this, that I could have started checking numbers from 20, since anything below will not be divisible by all numbers between 1 and 20, just a little note to myself.

### Problem #06

Another very simple problem. Conditions are clear, so it was all just writing two functions: one for calculating the sum of all squared numbers and the second function for calculating the squared sum of all numbers. And then finding the difference between those two.

Something I noticed: if I am not mistaking, the original problem states "find the difference between the sum of the squares of the first ten natural numbers and the square of the sum", but example shows the difference of vice versa.

### Problem #07

Simple problem, simple solution. Just involves putting the right conditions and functions in the right places of the code. I chose a simple approach of looping through every natural number and tracking the number of primes I found until I got to the 10001st prime number.

### Problem #08

This problem involved a little bit more thinking since I had to figure out how to loop through 4 sets of numbers at a time. It is not hard, just took me a tiny bit more time than previous problems.

### Problem #09

First problem challenge that made me think about nesting nightmare. This one wasn't that deep, just 3 for() loops and 1 if() statement nested within each other. But still, reminded me of how nesting if's within if's can turn quickly into a nested nightmare. The solution is very simple: each for() loop goes through all natural numbers and if() condition checks if the sum of squared numbers is 1000.

As I write this, I realise I could have avoided all those for loops by simply having one loop that increments the number by 1 and each time call a function that sums up each number digit squared and performs the same conditional check.

### Problem #10

Oooooooook, this is the first problem that forced me to think about alternative methods, optimisation AND I actually had to do some research outside of the problem. I shared both solutions to show you the insane difference in speed: my original, slow method took 476 seconds to solve the problem, while the optimised version took.... 0.1 seconds! That is 4760 times faster!!!

I've built a function that generates an array of all natural numbers that I can work with. And the fun begins...

#### SLOW method

Simple, primitive solution: loop through every number and check if it is a prime number. It gets progressively slower as I loop through every natural number, the process of checking if it is a prime involves pretty much looping through all numbers up to THAT number all over again.

#### FAST method

I did some researching online and I implemented [Sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) method. I read about it enough to understand the underlying principle of the method, but I chose not to check for actual formulas or code implementation and write my own implementation of the method.

The idea is simple: for every prime number you find, it's multiples are automatically no longer prime numbers since they are divisible by more than just 1 and itself. For example if 3 is prime (divisible only by 1 and itself), then we can automatically flag further numbers as not primes: 3+3=6, 6+3=9, 9+3=12 and so on will all NOT be primes because they are divisible by more than just 1 and itself (for ex. 12 is divisible by 1, by itself AND also by 3 and 4).

The other tip I got is that we only have to check the numbers up to the square root of the upper limit of the range. For example if we are checking numbers from 1 to 20, then we only need to loop through all numbers that are smaller than square root of 20. By the time we get to that upper end of the range, we have already flagged all non-primes in the second half of the range.

The challenge here was to figure out a data structure that would allow me to flag non-primes easily. Initially I had a separate array that had 1's and 0's stored that indicate 1=prime, 0=not prime. But then I realised that if it is not a prime, I no longer need the value of it. So I decided to replace every non-prime number with -1 in the same array of all natural numbers and once I hit the limit of square root of 2000000, loop through the array and add up all positive numbers.

### Problem #11

This problem was not as challenging as previous one #10, but it also involved lots of thinking on how to approach it. The main issue I had here was code repeatability. I had the same code copy/pasted in multiple places and did not like that. So I wrote two versions of the program: original, with copy/pasted code and another one cleaned up just to see the difference. The cleaned up code has a separate function for calculating the product of 4 adjacent numbers, rather than copying calculation code in every block that checks in different direction.

Code length in A version is 414 rows, while code length is B version is 269. Almost half the length!

I have also added a neat result formatting to display the whole table with the 4 adjacent numbers highlighted in the table.

### Problem #12

Similar to problem #10. While this problem did not make me do research outside of the problem description, it definitely involved optimisation. And I managed to speed up the problem solution from 900 seconds down to 0.2 seconds!

##### SLOW method

Simple as stone age. Loop through all natural numbers and count the number of divisors without remainder it has. And do that until we find the number with more divisors then the set parameter.

##### FAST method

I am super proud of this, because I came up with this trick by myself, without looking up anything, not even a hint! And with that comes another crazy performance improvement, going from 900 second long operation down to 0.2 seconds.

The trick I used here is that for every divisor we find, there is going to be another divisor on the other end of the range (quotient from multiplication perspective), unless the divisor is right in the middle of the range (square root of the number we are checking). For example:

Number 6 has divisors without remainder 1, 2, 3, 6. We start checking each number from start and immediately the first we find is 1, we can automatically count in quotient 6 as another divisor, because 1x6=6x1=6. Next we find 2, we can automatically count in quotient 3 as a divisor, because 2x3=3x2=6. There are no divisors in between those number that will be without remainder, so we no longer have to loop through every natural number up to the number we are checking, we only have to check half of the numbers. 

Exception is when there is a divisor right in the middle of the range:
number 9 has divisors 1, 3, 9. Since 3 is in the middle, we do not have to count in a quotient since it is the same number 3x3=9.

When do we stop checking the numbers? When our found divisor is equal to quotient OR quotient is smaller than the divisor without remainder. In former case we reached the middle of the range we are checking, in latter we went past the middle point already. In both cases we chacked the first half of the number range and already accounted for all divisors in the second half of the range.

### Problem #13

My first though when I read the problem: is that all? Piece of cake, I just add them up and display first 10 digits!

And then I realised that the largest integer a JavaScript variable can hold is 16-digit long and the problem has 50-digit numbers. Oh boy, celebrated too early...

The solution to the problem is very simple: do you remember the kindergarden level of number addition that involves adding one number at a time, starting from the rightmost side and if you end up with a 2-digit number, you set the leftmost digit of the sum aside to be added to the next two digits you're adding up? Well, that is the solution to this problem. The challenge was to actually implement that solution with code.

The solution involves two steps: 

- first iteration is as described above. Since we're adding a lot of numbers, there are cases where the sum can be 3-digit number, in which case I still store the rightmost digit as an answer in the current position and the next two digits are set aside for the next position summation.

- the second iteration is exactly the same to clear up the remaining 2-digit numbers that are still left from first iteration.

I even left the console.log() methods commented out in two places, which you can uncomment to see the results of each iteration.

### Problem #14

This problem is fairly simple to solve. Collatz sequence is explained clearly in the problem, so no researching outside of the description was done.

There is a function that calculates Collatz sequence length and this function is called for every natural number that we loop through, until we loop through all numbers under one million. Every time we check if Collatz sequence of the current number in question is longer than the previous stored sequence length and find the longest length of Collatz sequence.

There is a potential bug in the code that I left on purpose. The problem states, that while Collatz sequence always ends with number 1, this has not been proven yet. And my function that checks Collatz sequence, has a while() loop that only stops when Collatz sequence number becomes 1. While I have a hardcoded limiter set to loop through all number up to one million, this bug will not happen, since I have already tested all numbers up to one million, but if I removed the limiter and instead set it as a parameter for the code to be able to run the program with any number size, there might be a situation where we hit a number whose Collatz sequence never reaches 1 and we are stuck in an infinite while() loop.

I could modify the while() loop condition to run until we go into below 1, this way if we reach anything that is <1, we will still have a condition that breaks the loop.

### Problem #15

First challenge where I failed to meet my own requirements! I could not figure out steps that would look logical to solve the issue and tried to check online for some hints, but accidentanlly stumbled upon a solution and therefore failed my challenge. Once you see it, you cannot "unsee" it anymore...

I had some options that I came up with myself beforehand. One was adding a number in each position that indicated, how many previous positions are there that let you arrive at the current position. The other was a reverse: how many directions I can go to from my current position. But I could not get past those two ideas further to make sense. I think the closest one to solution was the third option: to use bitwise operations. The idea was quite simple: ones represented a step to the right and zeroes represented a step down. When you have a square grid, regardless which path you take, you ALWAYS must take even number of steps to the right and to the left. So, for example, on a 2x2 grid you have, one possible path would be Right, Down, Right, Down, which translates to 1010. So I figured that if I just generate every possible binary number, which had a length of 2 x grid size and just filter out unique ones, and then filter out all "false" results. The false results were either duplicates or numbers with uneven number of ones and zeroes. It seems to work, but, unfortunately, took way too long.

So, the solution was kind of similar to what I was trying with counting number of possible paths I can take to arrive at current location. I just had to add up the numbers of previous positions, to figure out the number for current position. It is hard to explain in words, so I will try to use some ASCII art, lets say for a 2x2 grid. Below it might look like I am showing a 3x3 grid, but it is actually the vertices of 2x2 grid. For example, 1x1 grid (esentially a square) has 2 vertices on each edge, therefore it will be shown as 2x2 points. So therefore I am showing 2x2 grid as having 3x3 vertices and each letter below represents each vertex.

( A ) ( B ) ( C )

( D ) ( E ) ( F )

( G ) ( H ) ( X )

To get from point A to point B, you only have one way, therefore B=1, same case getting from A to D, therefore D=1. So, to fill in the rest of points, you add up possible paths that take you to positions right before the current one you are calculating. To get from point A to point E, you can go either A->B->E or A->D->E, so a total of two possible paths. And to get that number, you simply add up the numbers of the vertices that are one step BEFORE position E: B+D=E, therefore E=1+1=2. If the point is on the edge (G), then there is nothing to the left of it, so you add 0: G=0+D=0+1=1. And so on until you get to the last bit: H=E+G=2+1=3, F=C+E+1+2=3 and finally X=F+H=3+3=6. All numbers filled in are below:

( 1 ) ( 1 ) ( 1 )

( 1 ) ( 2 ) ( 3 )

( 1 ) ( 3 ) ( 6 )

Note about (A) position: there is really nothing that takes you to this position, since it is a starting point, but I used initial value of 1, because then my algorithm works as intented for adding up numbers for all other points. Otherwise I would have to hardcode the neighbouring points B and D to have values set to 1.

Hopefully that makes sense.

### Problem #16

Easy solution, just had to think about implementation. 2 to the power of n is basically just 2 multiplied by 2 n-times. Obviously, 2 to the power of 1000 is going to be very big number, so I used school grade multiplication: multiply each number digit by 2 and if the result is >9, then the tenth position is stored for the next digit. For example 184 x 2:

4 x 2 = 8

8 x 2 = 16 -> 6 (1 is stored away to be added to next multiplication)

1 x 2 + 1 = 3

Answer: 184 x 2 = 364

And this multiplication was repeated 1000 times. I used array to store each digit separately and initiated that array with 2, since that is the number we are starting. If number increased by one digit, that new digit would be added to the front of array.

Once multiplication is done, it is just as simple as adding up all number in the array.

### Problem #17

Once again, a relatively simple problem, just implementation was a bit harder to do. I had to figure out, how to “write” the numbers out in words. Easiest way for me was to simply loop through each digit of a given number and add total count based on those digits, whether they are in thousands, hundreds, tens or single digit positions.

Also, the counting for the word “and” is optional and can be set to 0 as I added it as variable, rather than hardcoding the number 3.

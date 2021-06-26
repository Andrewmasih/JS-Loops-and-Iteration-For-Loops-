/* statement1 will run before the loops even starts, statement2 defines the condition of the loop, when should loop start or end, statement3 runs after the loop 

for (statement1; statement2, statement3;) {

  code block to be executed
};

If you want to run a atstement 10 times we can write a 'for loop' instead of writting it out 10 times.
*/ 

for (let i = 0; i < 10; i++) {
  console.log("repeat ten times");
}

/* we need the 'for' keyword so the computer knows what kind of a loop we are using, after the keyword "for" are the parentheses which hold the FUN part (let i = 0; i < 10; i++) 

statement1:
assigned decleared the varible named i and gave it the value of 0,

it sets the start of the loop, where the computer should starts counting from: i = 0;

statement2:
checks whether the value of i is less than 10 in each iteration: 1 < 10;

statement3: increments the value of i in each iteration by 1: i ++;

step1: 1 = 0; 0 is less than 10, it runs the codeblock, increments i by 1 step1: 2 = 1; 1 is less than 10, it runs the codeblock, increments i by 1 
step1: 3 = 2; 2 is less than 10, it runs the codeblock, increments i by 1
step1: 4 = 3; 3 is less than 10, it runs the codeblock, increments i by 1
step1: 5 = 4; 4 is less than 10, it runs the codeblock, increments i by 1
step1: 6 = 5; 5 is less than 10, it runs the codeblock, increments i by 1
step1: 7 = 6; 6 is less than 10, it runs the codeblock, increments i by 1
step1: 8 = 7; 7 is less than 10, it runs the codeblock, increments i by 1
step1: 9 = 8; 8 is less than 10, it runs the codeblock, increments i by 1
step1: 10 = 9; 9 is less than 10, it runs the codeblock, increments i by 1
step1: 11 = 10; 10 is NOT less than 10, it goes oiut the loop, interation stops.

in my example statement3 increments the count, but it doesnt have to, 
changing statement3 to i = i + 2 would step through the 'for' loop, 2 at a time.

we can also count backwards using the code:


for (let i = 10; 1 > 0; i--) {
  console.log ("count backwards");
}

*/


let i;

for (i = 0; i < 10; i ++) {

 console.log("i is" + i + "and that is less than 10");

} 

console.log("i out of the loop:" + i); // iteration stopped
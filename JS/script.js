//Question 1:

// A. 24 > 3
console.log(24 > 3); //true
//B. 2 < "12"
console.log(2 < "12"); //true
// C. 0 == 2
console.log(0 == 2); //false
// D. 2.0 === 2
console.log(2.0 == 2); //true
// E. 2.0 == "2"
console.log(2.0 === "2"); //false
// F. 2 < "John"
console.log(2 < "john"); //false
// G. 2 > "John"
console.log(2 > "john"); //false
// H. "2" < "2"
console.log("2" < "2"); //false
// I. "2" > "12"
console.log("2" > "12"); //true
// J. 1 == 1 || 3 == 2 || 3 == 7
console.log(1 == 1 || 3 == 2 || 3 == 7); //true
// K. 1 == 1 && 2 == 2 && 3 == 7
console.log(1 == 1 && 2 == 2 && 3 == 7); //false
// L. 1 == 1 || 2 == 2 && 3 == 7
console.log(1 == 1 || (2 == 2 && 3 == 7)); //true
// M. 1 == true && 0 > true || "31" > "9" || 10 > 5 || !("2" == "two" || 1 == "1")
console.log(
  (1 == true && 0 > true) ||
    "31" > "9" ||
    10 > 5 ||
    !("2" == "two" || 1 == "1"),
); //true

//Question 2:

//1. Which expression returns true?
console.log(1 == 1); //b. true
console.log(1 === 1); //c. true

//2. What is the value of x in this statement?
//let x = (1 == true); b. true

//3. What is the value of y from the following statements?
//let x = 10;
//let y = (x > 5) && (x < 15) d. true

//4. What is the value of x from the following statements?
//let x = 5;
//x += 3;   b) 8

//5. What is the value of y from the following statements?
//let x = 10;
//let y = x++;  b) 11


//6. What is the value of y in the following statements?
//let x = 1;
//let y = (x !== 2); d. true


//7. What is the output of (+”2”+2)?
 // 4

//8. What is the output of (7 % 3)?
console.log(7%3) // 1

//9. What is the output of (2+true)?
console.log(2 + true); // 3


//Question 3:
//Write a simple script that adds 1 and 2 and displays the result on the console
let a=1;
let b=2;
let c=a+b;
console.log(c);



//Question 4:
 var first_name = "Girum";
var last_name = "Tegegn";
var full_name = first_name +" "+ last_name;
console.log(full_name);


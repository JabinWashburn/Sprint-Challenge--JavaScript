// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/
function consume (a, b, cb){
  return cb(a, b);
}
console.log(consume);
/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
const add = (a, b) => {
  return a + b;
}

const multiply = (a, b) => {
  return a * b; 
}

const greeting = (a, b) => {
  return `Hello ${a} ${b}, nice to meet you!`;
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation: 
//because the child function is nested in the scope of the parent function it can access inside its parent. since internal was defined witin parent child has access becuse its in that scope. 

const external = "I'm outside the function";

function myFunction() { // this is part of the parent function
  console.log(external);
  const internal = "Hello! I'm inside myFunction!"; //here is where internal was defined. 

  function nestedFunction() {//here is the child
    console.log(internal);
  }; //here is where child ends. 
  nestedFunction();
} // here is where parent function ends 
myFunction();

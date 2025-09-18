var a = 20;
let b = 30;
const pi = 3.14;
console.log("Global Scope:");
console.log("value of a in global scope is: ", a);
console.log("value of b in global scope is: ", b);
console.log("value of pi in global scope is: ", pi);

fun();
console.log("outside the function:");
console.log("Value of a outside the function:", a);
console.log("Value of b outside the function:", b);//error
console.log("Value of c outside the function:", c);//error
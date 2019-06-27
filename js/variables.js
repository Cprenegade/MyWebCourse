let x,y,z

x=10;
y='10'
z=30;

console.log("x is of type " + typeof x);
console.log("y is of type " + typeof y);
console.log("z is of type " + typeof z);

let s,p 

s = x + z;
p = x * z;

console.log("The sum of " + x + " plus " + z + " is " + s);
console.log("The product of " + x + " times " + z + " is " + p);

var newX = x++;
console.log("newX is of type " + typeof newX);
console.log("newX equals " + newX);
console.log("x equals " + x);
console.log("Does X equate to Y?  " + (x == y));

let timeInMs = Date.now();
console.log("Epoch time is " + timeInMs);

let years, months, days

years = timeInMs/31536000000;
months = years * 12;
days = years * 365;

console.log("It has been approximately " + years + " years since Jan 1, 1970.");
console.log("It has been approximately " + months + " months since Jan 1, 1970.");
console.log("It has been approximately " + days + " days since Jan 1, 1970.");



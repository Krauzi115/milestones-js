// feelin hot and feelin dangerous

let num1 = 1000;
let num2= 9870;

let sum = num1 + num2;
console.log(`the sum of ${num1} and ${num2} is ${sum}`);

let difference = num1-num2;
console.log(`the difference of ${num1} and ${num2} is ${difference}`);

let product = num1 * num2;
console.log(`the product of ${num1} and ${num2} is ${product}`);

let dividend = num1 / num2;
console.log(`the dividend of ${num1} and ${num2} ${dividend}`);

let remainder = num1 % num2;
console.log(`the remainder of ${num1} and ${num2} is ${remainder}`);

let exponentation = num1 ** num2;
console.log(`the exponentation of ${num1} and ${num2} is ${exponentation}`);

let mathFloor = Math.floor(num1/num2);
console.log(`the Math.floor dividend of ${num1} and ${num2} is ${mathFloor}`);

//prediction of how output of program will change when values of num1 and num2 change. 
// I will change the values of num1 and num2 to the values below. 
// let num1 = 1000;
// let num2 = 9870;
let blah = 87690;
let rightMostDigit = blah % 10;
console.log(`the right most digit of ${blah} using the % sign is ${rightMostDigit}`);

if(blah % 2 ==0 ) {
    console.log(`We have determined that ${blah} is an even number due to this statement`);
} else {
    console.log(`If you are reading this than ${blah} is an odd number due to this statement`);
}

//increment blah by one
let incrementByOne = blah + 1;
console.log(`The increment by one to ${blah} is ${incrementByOne}`);

//increment blah by 2
let incrementByTwo = blah + 2;
console.log(`The increment by two to ${blah} is ${incrementByTwo}`);

//increment by 10 
let incrementByTen = blah + 10;
console.log(`The increment by 10 to ${blah} is ${incrementByTen}`);

//increment by k where k is a variable containing a number
let k = 20;
let incrementByK = blah + k;
console.log(`The increment of k to ${blah} is ${incrementByK}`);

//decrement blah by one
let decrementByOne = blah - 1;
console.log(`The decrement of one to ${blah} is ${decrementByOne}`);

//decrement blah by 2
let decrementByTwo = blah - 2;
console.log(`The decrement of two to ${blah} is ${decrementByTwo}`);

//decrement blah by  10
let decrementByTen = blah - 10;
console.log(`The decrement of ten to ${blah} is ${decrementByTen}`);

//decrement by k where k is a variable containig a number, using same k value as in the increment section
let decrementByK = blah - k;
console.log(`The decrement of k to ${blah} is ${decrementByK}`);
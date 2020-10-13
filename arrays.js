// declare variable named coolArray containing at least 5 elements
let coolArray = [5, 6, 7, 8, 9];
console.log(`The contents of coolArray are ${coolArray}`);

//length of coolArray
console.log(`The length of coolArray or ${coolArray} is ${coolArray.length}`);

//First element in coolArray at index 0
console.log(`The 1st element in coolArray or ${coolArray} at index 0 is ${coolArray[0]}`);
//second element in coolArray at index 1
console.log(`The second element in coolArray or ${coolArray} at index one is ${coolArray[1]}`);
//last element in coolArray
console.log(`The last element in coolArray or ${coolArray} is ${coolArray[4]}`); //position four because four refers to the fifth and final element in the array
//element of coolArray at index k where k is a variable containing a number
let k = 2
console.log(`The element of k in coolArray or ${coolArray} is ${coolArray[k]}`);

//change the value of the 1st element in coolArray at index 0
coolArray[0]=6;
console.log(`The new element at index 0 of coolArray is ${coolArray[0]}`);
//change the value of the 2nd element in coolArray at index 1
coolArray[1]=7;
console.log(`The new element at index 1 of coolArray is ${coolArray[1]}`);
//change the value of the last element
coolArray[4]=0; 
console.log(`The new element at the last index of coolArray is ${coolArray[4]}`);

//change elemnt at index k
coolArray[k]=3;
console.log(`The new element at index k of coolArray is ${coolArray[k]}`);

//append element to coolArray
coolArray.push(9);
console.log(`Appended new item to ${coolArray} is ${coolArray[5]}`);

//remove last elemnt from array
console.log(`Removing last element from ${coolArray} returns you ${coolArray.pop()} and moves you back to ${coolArray}`);

//prepend element to array
console.log(`Prepending an element to ${coolArray} gets you ${coolArray.unshift(coolArray, 1)} and returns ${coolArray}`); //will be returning to this one

//remove element from start of array
console.log(`Removing the starting element of ${coolArray} returns you ${coolArray.shift()}`) //returning tot this one as well


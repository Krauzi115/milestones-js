let str1 = `Trench Mob is the name`;
let str2 = `so going hard is the game`;
console.log(`The value of str1 is ${str1}`);
console.log(`The value of str2 is ${str2}`);

//concatenate str1 and str2
let concatenateStrings = str1 + ` ` + str2;
console.log(`The concatenation of ${str1} and ${str2} is ${concatenateStrings}`);
// extra of concatenate strings without the space ``
let string1 = `Matt Chapman to th`;
let string2= `e Mariners???`;
let concatOneAndTwo = string1 + string2;
console.log(`The concatenation of ${string1} and ${string2} is ${concatOneAndTwo}`);

//determine of str1 appears in str2 using String.prototype.includes
console.log(`The string "${str1}" ${str2.includes(str1) ? 'is' : 'is not'} contained in str2`);
//same steps as above but comparing str1 to the entire complete string
let completeString = `Trench Mob is the name so going hard is the game`;
const search = `Mob`;
console.log(`The word "${search}" ${completeString.includes(search) ? 'is' : 'is not'} in the sentence`);

//waffles string exercises number of characters in string AKA length
let waffles = `Anyone like Shoreline Mafia?`
console.log(`The length of the string "${waffles}" is ${waffles.length}`);

//waffles string convert to uppercase
console.log(`The uppercase of "${waffles}" is ${waffles.toUpperCase(waffles)}`);
//waffles string convert to lowercase
console.log(`The lowercase of "${waffles}" is ${waffles.toLowerCase(waffles)}`);

//waffles string get 1st character at index 0
console.log(`The first character of "${waffles}" at index position 0 is ${waffles.charAt(0)} `);
//waffles string get 2nd character at index 1
console.log(`The second character of "${waffles}" at index position 1 is ${waffles.charAt(1)} `);
//waffles string get last character at index 0
console.log(`The last character of "${waffles}" is ${waffles.charAt(27)} `); // is at index position 27 because the string length is 28, so 27 is really the 28th character of the string which the question mark


//define variable k containing a number and get the character at index k in waffles
let k = 4;
console.log(`The index of k or ${k} in the string "${waffles}" is ${waffles.charAt(k)}`); // k is 4 so the 4th character of the waffles string is n



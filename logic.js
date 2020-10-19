let num1 = 88;
let num2 = 666;

if(num1 & num2 % 2 == 0 ) {
    console.log(`${num1} and ${num2} are even`);
}

 if (num1 % 2 ==0 & num2 % 2 == 1 ) {
    console.log(`${num1} is the only even number`);
}

 if (num2 % 2 ==0 & num1 % 2 == 1 ) {
    console.log(`${num2} is the only even number`);
}

 if (num1 & num2 % 2 == 1) {
    console.log(`Both ${num1} and ${num2} are not even at all`);
}



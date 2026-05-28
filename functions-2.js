function multiply (a,b,c) {
    switch (true) {
        case (a === b || a === c || b === c):
            return "Error! Please make all numbers different (●'◡'●)";
        default:
            return a*b*c;
    }
}

multiply();

function convertToseconds (minutes) {
    return minutes * 60;
}

convertToseconds();

function farenheitToCelsius (farenheit) {
    return (farenheit - 32) *5/9;

}

farenheitToCelsius();

function reverseString (string) {
    return string.split('').reverse().join('');

}

reverseString();

function countVowels (string) {

    let count = 0;
    const vowels = "aeiouAEIOU";

    for (const char of string) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;                           //used google for this TODO
}

countVowels();

function isPrime (number) {
    if (number <= 1) return false;
    if (number === 2) return true;
    if (number % 2 === 0) return false;
    
    const boundary = Math.sqrt(number);
    for (let i = 3; i<= boundary; i += 2) {
        if (number % i === 0) return false;
    }
    return true;                                //used google for this TODO
}

console.log(isPrime(7)); 
console.log(isPrime(10));
console.log(isPrime(1)); 
console.log(isPrime(2)); 
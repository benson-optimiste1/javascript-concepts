/**
 * ways of writing fucntions
 * 1. fucntion declaration
 * 2. fucntion expression
 * 3. anonymous functions
 * 4. arrow functions
 */


// 1. function declaration

function twoSum(num1, num2) {
    return num1 + num2
    const outside = 'not working'
}
const result = (twoSum(3, 4))
console.log(result)


// 2. Function expression

const twoSumJs = function (num1, num2) {
    return num1 + num2
}
const result2 = twoSumJs(45, 5)
console.log(result2)

// 3. anonymous function

const myArray = []
myArray.map(function (num1, num2) {
    return num1 + num2
})

// 4. arrow function

const twoSumArrow2 = (num1, num2) => {
    return num1 + num2
}
const result3 = twoSumArrow2(45, 67)
console.log(result3)

// 5. Arrow function - one liner

const twoSumArrow3 = (num1, num2) => num1 + num2
const result4 = twoSumArrow3(78, 97)
console.log('result4 ->', result4)

/**
 *6. write a function that takes in 2 numbers and return the largest number
 * 
 * 
 */
function twoSum5(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
const result5 = twoSum5(75, 55);

console.log(result5)

// 2. Store the result 

function storeResult(x) {

    return (x * 2)
}
console.log(storeResult(result5))

// Given a string, return true if the string is a palindrome or false if it is not.  Palindromes are strings that form the same word if it is reversed. *Do* include spaces and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false
//   palindrome("racecar") === true 

function Palindrome(str) {
    /**
     * Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
     var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
    
    var lowRegStr = str.toLowerCase().replace(re, '');
    str.toLowerCase() = "A man, a plan, a canal. Panama".toLowerCase() = "a man, a plan, a canal. panama"
    str.replace(/[\W_]/g, '') = "a man, a plan, a canal. panama".replace(/[\W_]/g, '') = "amanaplanacanalpanama"
    var lowRegStr = "amanaplanacanalpanama";
       
    
    * Step 2. Use the same chaining methods with built-in functions from the previous article 'Three Ways to Reverse a String in JavaScript'
    reverseStr = lowRegStr.split('').reverse().join(''); 
    lowRegStr.split('') = "amanaplanacanalpanama".split('') = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
    ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].reverse() = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
    ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].join('') = "amanaplanacanalpanama"
    So, "amanaplanacanalpanama".split('').reverse().join('') = "amanaplanacanalpanama";
    And, var reverseStr = "amanaplanacanalpanama";
     
    * Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
    return reverseStr === lowRegStr; // "amanaplanacanalpanama" === "amanaplanacanalpanama"? => true
    **/
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return str === str.split('').reverse().join('');
}
console.log(Palindrome("abba"));        // true
console.log(Palindrome("abcdefg"));    // false
console.log(Palindrome("racecar"));   // true




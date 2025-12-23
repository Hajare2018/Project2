// Find indices of the two numbers in an array that add up to a target. 

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [-1, -1];
}

console.log(twoSum([1, 2, 3, 4, 5], 9));


function twoSum(nums, target) {
    const map = new Map(); // value -> index

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }

    return [-1, -1];
}

// Example
console.log(twoSum([2, 7, 11, 15], 9));


// 1. Reverse a String

let input = "hello brother";
let output = ""
function reverseString (str) {
    for (let i = str.length -1; i >= 0; i--) {
        output += str[i];
    }
    return output;
}

console.log(reverseString(input));

// 2. Check for Palindrome

let input = "madam";
let output = ""
function reverseString (str) {
    for (let i = str.length -1; i >= 0; i--) {
        output += str[i];
    }
    if (str === output) {
        return true;
    } else {
        return false;
    }
}

console.log(reverseString(input));


// 3. Fibonacci Series
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
    let num = 10; 
    let num1 = 0; 
    let num2 = 1;
function fibonacci () {
    for (let i = 2; i < num; i++) {
        let num3 = num1 + num2;
        console.log(num3)
        num1 = num2
        num2 = num3
    }
}
fibonacci()

let num = 5;

function main (num) {
    let factorial = 1;
    
    for (let i = 1; i <=num; i++) {
       factorial = factorial * i
    }
    
    return factorial;
}

console.log(main(num));

// Input = 5
// output
// 1
// 11
// 112
// 1123
// 11235
let num = 5;
let str = "";
    
for (let i = 1; i <= num; i++) {
        if (i === 1) {
            str = "1";
        } else if (i === 2) {
            str += "1"
        } else if (i === 3) {
            str += "2"
        } else if (i === 4) {
            str += "3"
        } else if (i === 5) {
            str += "5"
        }
        console.log(str)
    }


// print the sequence
let num = 5;

function series(num) {
    let fib = [1, 1];
    let str = "";

    for (let i = 0; i < num; i++) {
        if (i >= 2) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }

        str += fib[i];
        console.log(str);
    }
}

series(num);


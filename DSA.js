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

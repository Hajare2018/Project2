// 1. Write a Program to reverse a string in JavaScript.

let str = 'data';

function reverseString () {
    let reversed = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed;
}

console.log(reverseString());

//2. check is palindrome

let str = 'ror';
function isPalindrome () {
    let output = [];
    for (let i = str.length - 1; i >= 0; i--) {
        output.push(str[i]);
    }
    
    let reversed = output.join('')
    
    if (str === reversed) {
        return "palindrome"
    } else {
        return "not a palindrome"
    }
}
console.log(isPalindrome())


// 3. Find the largest number in an array in JavaScript.

let arr = [ 10, 20, 30, 40, 50];

function findLargest () {
    let newArr = [0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > newArr) {
            newArr = arr[i]
        }
    }
    return newArr;
}

console.log(findLargest())

// 4. How Remove the first element from an array in JavaScript?

let arr = [2,3,4,5];

arr = arr.splice(1);

console.log(arr);

// 5. Write a Program to use a callback function?

function Greeting (name, callback) {
    callback(`Hello, ${name}`)
}

console.log(Greeting('James', (message) => console.log(message)));
// 6. Write a Program to find a sum of an array    

let arr = [10, 15, 20, 22, 33, 45];

function sumArray () {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    
    return sum
}

console.log(sumArray())

let arr = [1, 2, 2, 3, 4, 4, 5];
// Output → [2, 4]   // Return duplicate numbers

function returnDuplicate (arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] == arr[i + 1]) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}

console.log(returnDuplicate(arr))



let arr = [22, 7, 3, 8, 11, 5];

function findMax(arr) {
    let max = arr[0];  // Start with first element
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax(arr)); // Output: 22


let str = "aaabbccdddde";
// Output → a3b2c2d4e1  // Character frequency compression

function charFrequency (str) {
    let output = '';
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i+1]) {
            count++
        } else {
            output += str[i] + count
            count = 1;
        }
    }
    return output;
}

console.log(charFrequency(str));


let arr = [1, 2, 3, 4];
// Output → [24, 12, 8, 6]   // product of all except itself (no * by element)

function productExceptItself (arr) {

    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let product = 1;
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                product *= arr[j]
            }
        }
        newArr.push(product)
    }
    
    return newArr;
}

console.log(productExceptItself(arr))

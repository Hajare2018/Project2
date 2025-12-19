// Immeditely invoked function expression

(function () {
    console.log("I am immediately invoked!!!")
})()

// Callback
setTimeout(function () {
    console.log("delay the execution of the function!!!")
}, 1000);

// functional Programing construct
const arr = [1,2,3]

const double = arr.map(function (val) {
   return val * 2
})
console.log(double)



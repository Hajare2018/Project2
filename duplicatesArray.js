const users = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 1, name: "c" }
];

let duplicate = new Set();

let output = users.filter((item) => {
    if (duplicate.has(item.id)) {
        return false;
    } 
    duplicate.add(item.id)
    return true
})

console.log(output)

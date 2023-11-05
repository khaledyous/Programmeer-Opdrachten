let stuff = ['c', 5645, 9393.77, "hello", true, false, "Good morning", 88, -90, 777.777, 90, 665.33, "F"];
let strings = [];
let numbers = [];
let booleans = [];

for (let item of stuff) {
  if (typeof item === "string") {
    strings.push(item);
  } else if (typeof item === "number") {
    numbers.push(item);
  } else if (typeof item === "boolean") {
    booleans.push(item);
  }
}

console.log("Strings:", strings);
console.log("Numbers:", numbers);
console.log("Booleans:", booleans);

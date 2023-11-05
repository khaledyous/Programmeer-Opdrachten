let array = ["hoii", false, 40, " amazing", "hallo"];

array.splice(2, 0, "aardbei", "banaan");
let poppedItem = array.pop();
let ShiftedItem = array.shift();
array.push("eet");

console.log(ShiftedItem, poppedItem, array);
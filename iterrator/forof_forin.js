let arr = [1, "2", false];
for (let value of arr) {
    console.log(value);
}
for (let key in arr) {
    console.log(key, arr[key], typeof key);
}
let pets = new Set(["cat", "monkey", "dog"]);
pets["spe"] = "human";
for (let pet in pets) {
    console.log(pet);
}
for (let pet of pets) {
    console.log(pet);
}
console.log(pets[0]);

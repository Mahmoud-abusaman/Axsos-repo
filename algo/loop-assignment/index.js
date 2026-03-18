for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("------------------");

for (let i = 10; i >= 1; i--) {
    console.log(i);
}
console.log("------------------");

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
console.log("------------------");

for (let i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}


console.log("------------------");
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);

console.log("------------------");

// fizbuzz
for (let i = 1; i <= 30; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("fizzbuzz");
    } else if (i % 3 == 0) {
        console.log("fizz");
    } else if (i % 5 == 0) {
        console.log("buzz");
    }
}
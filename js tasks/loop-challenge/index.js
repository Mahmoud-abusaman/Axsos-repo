
console.log("#####odd numbers");

for (let i = 0; i < 20; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}


console.log("#####decreasing multiple of 3");

for (let i = 100; i > 0; i--) {
    if (i % 3 === 0) console.log(i);

}



console.log("#####print the sequence");

for (let i = 4; i > -4; i -= 1.5) {
    console.log(i)
}


console.log("#####sigma ")

let num = 100;
let sum = num * (num + 1) / 2;
console.log(sum);


console.log("#####sigma 2")

let sum2 = 0;
for (let i = 0; i <= 100; i++) {
    sum2 += i;

}
console.log(sum2);


console.log("#####factorial")
let factor = 1;
for (let i = 1; i < 13; i++) {
    factor *= i;

}
console.log(factor);


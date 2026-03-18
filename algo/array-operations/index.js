let colors = ["red", "green", "blue", "yellow", "purple"];

console.log(colors[0]);
console.log(colors[colors.length - 1]);


console.log(colors[1]);

colors[2] = "orange";
console.log(colors);

console.log("---------------------------");

let numbers = [10, 20, 30, 40, 50];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
// reverse order
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}

console.log("---------------------------");

let numbers2 = [5, 10, 15, 20, 25, 30]
let target = 25;
let flag = false;
for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] === target) {
        console.log("Found at index " + i);
        flag = true;
        break;
    }
}
if (!flag) {
    console.log("Not found");
}

console.log("------------------------------");

let scores = [50, 20, 70, 10, 40]

scores.sort();
console.log(scores);

scores.reverse();
console.log(scores);


let names = ['shatha', "sara", "mahmoud", "mohammad"]
names.sort();
console.log(names);

console.log("------------------------");


let animals = ['dog', 'cat', 'rabbit'];
animals.push('elephant')
animals.unshift("lion")
animals.splice(2, 0, "tiger")
console.log(animals);


console.log("--------------------------");
let fruits = ["apple", "banana", "orange", "mango", "grapes"];

fruits.shift();
fruits.pop();
fruits.splice(fruits.indexOf("banana"), 1);
console.log(fruits);

console.log("--------------------------");

let numbers3 = [1, 2, 3];
let numbers4 = [4, 5, 6];

let numbers5 = numbers3.concat(numbers4);
console.log(numbers5);

console.log("---------------------------");

let items = ['a', 'b', 'c', 'd', 'e']

let items1 = items.slice(0, 3);
let items2 = items.slice(3);
console.log(items1);
console.log(items2);

console.log("---------------------------");
let numbers6 = [1, 5, 10, 15, 20, 25, 30];
let filteredNumbers = numbers6.filter((num) => num > 15);
console.log(filteredNumbers);


console.log("---------------------------");

function removeDuplicates(arr) {
    arr.sort((a, b) => a - b);
    let result = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            result.push(arr[i]);
        }
    }

    return result;
}

function rotateRight(arr, n) {
    let len = arr.length;

    if (len === 0) return arr;

    n %= len;
    return arr.slice(len - n).concat(arr.slice(0, len - n));
}

let input1 = [1, 2, 2, 3, 4, 4, 5];
console.log("Output:", removeDuplicates(input1)); 

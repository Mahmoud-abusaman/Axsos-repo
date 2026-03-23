

console.log("###################################removeBlanks");

function removeBlanks(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            newStr += str[i];
        }
    }
    return newStr;
}

console.log(removeBlanks("Plz remove the spaces"));


console.log("###################################getDigits");

function getDigits(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= "0" && str[i] <= "9") {
            newStr += str[i];
        }
    }
    return newStr;
}

console.log(getDigits("1a2b3c"));


console.log("###################################acronym");

function acronym(str) {
    let splitedStr = str.split(" ");
    let newStr = "";
    for (let word of splitedStr) {
        newStr += word[0].toUpperCase();
    }
    return newStr;
}

console.log(acronym("hypertext markup language"));


console.log("###################################countNonSpaces");

function countNonSpaces(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            count++;
        }
    }
    return count;
}

console.log(countNonSpaces("HyperText Markup Language"));


console.log("###################################removeShorterStrings");

function removeShorterStrings(arr, minLength) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= minLength) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(removeShorterStrings(["hello", "world", "a", "b", "yzz"], 3));
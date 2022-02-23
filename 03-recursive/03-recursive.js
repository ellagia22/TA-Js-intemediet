//soal no.1
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];

function sumOfArray(Array) {
    let sum = 0;
    if (Array === Array[sum]) {
        return sum
    } else {
        sum = Array.reduce((prevItem, currItem) => {
            return prevItem + currItem
        }, 0); {
            return sum
        }
    }
}

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));

// soal no.2

const avg1 = [1, 2, 3, 4, 5];
const avg2 = [0, 3, 1, 10, 22];

function countAboveAvg(Array, avg) {
    avg = sumOfArray(avg) / avg.length

    let value = 0;
    if (value > avg) {
        return value
    } else {
        for (let i = 0; i < Array.length; i++) {
            if (Array[i] > avg) {
                value++
            }
        }
    }
    return value
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);


// soal no.3

const arr = [1, 2, 3, 4, 5];

function searchInArray(Array, num) {

    if (found) {
        return index
    } else {
        let tempArr = [];
        for (let i = 0; i < Array.length; i++) {
            tempArr.push(Array[i]);
        }
        for (let j = 0; j < tempArr.length; j++) {
            if (tempArr[j] === num) {
                var found = true;
                var index = j;
            }
        }
        if (found) {
            return `angka ditemukan pada index: ${index}`
        } else {
            return "angka tidak ditemukan"
        }
    }
}

console.log(searchInArray(arr, 6));
console.log(searchInArray(arr, 1));
console.log(searchInArray(arr, 8));


// soal no.4

function trianglePattern(x, y) {
    if (x === 0) {
        return;
    }
    let space = "";
    for (let i = 0; i < y; i++) {
        if (i < x - 1) {
            space += " "
        } else {
            space += String.fromCharCode(64 + (y - x + (i - x) + 2));
        }
    }
    console.log(space);
    trianglePattern(x - 1, y);
}

const first = 5;
const second = 3;
const third = 2;

trianglePattern(first, first);
trianglePattern(second, second);
trianglePattern(third, third);
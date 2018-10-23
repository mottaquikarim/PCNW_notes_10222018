const arr = [11,12,13,14,15];
const newArr = []
for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] ** 2);
}

console.log('newArr: ',newArr);
console.log('arr: ', arr);

const squaredArr = [];
arr.forEach((currentItem) => {
    squaredArr.push(currentItem ** 2); 
});
console.log(squaredArr);

/*
    [1,2,3,4,5] => [11, 12, 13, 14, 15]
*/
const sqArr = arr.map((currentItem, index, originalArr) => {
    return currentItem ** 2
});

console.log(sqArr);

//const sqArr1 = arr.map(currentItem => currentItem ** 2)

const capitalized = ["a", "b", "c"].map((currentItem) => {
    return currentItem.toUpperCase();
}); // ["A", "B", "C"]

console.log(capitalized);

const failingGrades = [100, 34, 64, 66, 87, 99].filter((currentItem) => {
    return currentItem < 65;
});

console.log(failingGrades); // [34, 64]

const passingGrades= [100, 34, 64, 66, 87, 99].filter(grades => grades > 65);

console.log(passingGrades); // [100, 66, 87, 99]

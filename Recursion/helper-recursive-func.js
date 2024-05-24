// Find the odd numbers
// [1,2,3,4,5,6,7,8,9,10] -> input
// [1,3,5,7,9] -> output

function findOddNumbers(arr) {
    const oddNumbersArr = [];
    function helperRecursiveFunc(tempArr) {
        if (tempArr.length === 0) return oddNumbersArr;

        const num = tempArr.shift();
        if (num % 2 !== 0) {
            oddNumbersArr.push(num);
        }

        return helperRecursiveFunc(tempArr);
    }
    console.log(oddNumbersArr);
    return helperRecursiveFunc(arr);
}
const result = findOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(result);

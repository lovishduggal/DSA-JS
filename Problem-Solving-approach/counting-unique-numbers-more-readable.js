// counting unique values
// [1,1,1,2,2,2,3,3,3,4,5]

function countingUniqueVal(arr) {
    let i = 0;
    let j = 1;
    for (let index = j; j < arr.length; index++) {
        if (arr[i] === arr[j]) j++;
        else if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    console.log(arr);
    return { count: i + 1, arr: arr.slice(0, i + 1) };
}

// The TC would be O(n): Linear TC
const result = countingUniqueVal([1, 1, 2, 2, 3, 3, 3, 3, 3, 4, 4, 5]);
console.log(result);

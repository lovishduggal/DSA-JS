// counting unique values
// [1,1,1,2,2,2,3,3,3,4,5]

function countingUniqueVal(arr) {
    let i = 0;
    let j = 1;
    let count = 0;
    const uniqueVal = [];
    while (j <= arr.length) {
        if (arr[i] === arr[j]) j++;
        else {
            count++;
            uniqueVal.push(arr[i]);
            i = j;
            j++;
        }
    }

    return {
        count,
        uniqueVal,
    };
}

// The TC would be O(n): Linear TC
const result = countingUniqueVal([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 5]);
console.log(result);

// Recursive function:

// [2,3,4,5,1] -> arrange it into ascending order
//[1,2,3,4,5]

let i = 0;
let j = 1;
function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}
function sorted(arr) {
    if (isSorted(arr)) return arr;
    else if (arr[i] < arr[j]) {
        i++;
        j++;
    } else {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i = 0;
        j = 1;
    }
    return sorted(arr);
}
const result = sorted([2, 3, 4, 5, 1]);
console.log(result);

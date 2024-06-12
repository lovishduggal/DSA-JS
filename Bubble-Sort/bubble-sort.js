// [5,3,4,1,2,8,6,7] -> input
// [1,2,3,4,5,6,7,8] -> output
function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1])
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }
    return arr;
}

const result = bubbleSort([5, 3, 4, 1, 2, 8, 6, 7]);
console.log(result);

// [5,3,4,1,2,8,6,7] -> input
// [1,2,3,4,5,6,7,8] -> output
function bubbleSort(arr) {
    let isSwapped;
    for (let i = arr.length; i > 0; i--) {
        isSwapped = false;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                isSwapped = true;
            }
        }
        if (!isSwapped) break;
    }
    return arr;
}

// The TC would be O(n^2) -> Quadratic (worst case)
// The TC would be O(1) -> Quadratic (best case) (After optimization)

const result = bubbleSort([4, 1, 2, 3]);
console.log(result);

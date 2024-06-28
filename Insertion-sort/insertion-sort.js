// Input -> [3, 2, 1, 4]
// Output -> [1, 2, 3, 4]
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        for (j = i - 1; j >= 0; j--) {
            console.log(temp, arr[j]);
            if (temp > arr[j]) break;
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = temp;
    }
    return arr;
}

// The TC would be O(n^2) -> Quadratic
const result = insertionSort([3, 1, 4, 2, 0, 5, 8, 9, -1]);
console.log(result);

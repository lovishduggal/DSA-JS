// [4, 1, 3, 2] -> input
// [1,2,3,4] -> output

function selectionSort(arr) {
    let smallestVal;

    for (let i = 0; i < arr.length - 1; i++) {
        smallestVal = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallestVal]) {
                smallestVal = j;
            }
        }
        if (smallestVal != i) {
            let temp = arr[i];
            arr[i] = arr[smallestVal];
            arr[smallestVal] = temp;
        }
    }
    return arr;
}

//The TC would be O(n^2): Quadratic
const result = selectionSort([4, 1, 3, 0, 2, 44, 23, 43, 12]);
console.log(result);

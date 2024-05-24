// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// find the index of a given no in a sorted array
// find index of 5
// answer should be 4
// if i use one for loop and compare no with given no
// then i am using one for loop
// time complexity -> linear O(n)

// divide and conquerer technique
// time complexity -> binary O(log(n))

function binarySearch(arr, number) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (number < arr[middleIndex]) {
            rightIndex = middleIndex - 1;
        } else if (number > arr[middleIndex]) {
            leftIndex = middleIndex + 1;
        } else {
            return middleIndex;
        }
    }

    return -1;
}

// The Tc would be:Logarithmic O(log n)

const result = binarySearch([1, 2, 3], 3);
console.log(result);

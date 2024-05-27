// binary search algorithm
// find the index of a given no in an array

/**
 * Finds the index of a given element in a sorted array using binary search.
 *
 * @param {Array} arr - The sorted array to search within.
 * @param {*} ele - The element to find the index of.
 * @returns {number} The index of the element if found, otherwise -1.
 */
function indxOf(arr, ele) {
    if (arr.length === 0) return -1;

    let p1 = 0;
    let p2 = arr.length - 1;
    while (p1 <= p2) {
        let middleIndex = Math.floor((p1 + p2) / 2);
        if (ele > arr[arr.length - 1]) return -1;
        else if (ele > arr[middleIndex]) p1 = middleIndex + 1;
        else if (ele < arr[middleIndex]) p2 = middleIndex - 1;
        else return middleIndex;
    }
    return -1;
}

// The binary search is way faster than linear search
// The TC would be: O(log n)
const result = indxOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6);
console.log(result);

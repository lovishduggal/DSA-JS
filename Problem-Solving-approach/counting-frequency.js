// Approach: 1
function countingFrequency(arr1, arr2) {
    let flag = false;
    // Outer loop runs once for each element in arr1: O(n) where n is the length of arr1
    for (let i = 0; i < arr1.length; i++) {
        flag = false;
        // Inner loop runs once for each element in arr2: O(m) where m is the length of arr2
        for (let j = 0; j < arr2.length; j++) {
            // Checking if the square of the current element in arr1 equals any element in arr2
            // This check is O(1), constant time operation
            if (arr1[i] * arr1[i] === arr2[j]) {
                flag = true;
                break; // Breaks the inner loop if a match is found
            }
            // After checking all elements in arr2, if no square match is found, return false
            // This check happens at the end of each inner loop iteration, O(1)
            if (j === arr2.length - 1) {
                if (!flag) return false;
            }
        }
    }
    // If the function hasn't returned false by this point, it means all squares of elements in arr1
    // have a corresponding element in arr2, so return true.
    return flag;
}
const result = countingFrequency([3, 1, 2], [1, 4, 9]);
console.log(result);

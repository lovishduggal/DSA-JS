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
            // After checking all elements in arr2, if no square match is not found, return false
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

// Detailed Time Complexity Analysis

// Outer Loop: The outer loop iterates over each element in arr1, which gives it a time complexity of O(n), where n is the length of arr1.

// Inner Loop: For each iteration of the outer loop, the inner loop iterates over each element in arr2, giving it a time complexity of O(m), where m is the length of arr2.

// Comparison and Break: The comparison operation inside the inner loop is a constant time operation, O(1). The break statement also executes in constant time but can potentially reduce the number of iterations of the inner loop.

// Overall Time Complexity: The total time complexity of the function is O(n*m), because for each element in arr1 (n elements), the function iterates through each element in arr2 (m elements).

// Conclusion:

// The isArray2SquareOfArray1 function has a quadratic time complexity in terms of the lengths of the two input arrays, making it O(n*m). This means the execution time increases significantly with the size of the input arrays, especially if both arrays are large. This approach is not the most efficient for checking if the second array contains the square of every element in the first array, especially when considering large datasets. Optimizations such as using a hash table to store the squares and their frequencies could potentially reduce the time complexity.
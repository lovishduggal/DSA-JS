//! Now we try to calculate TC of the given below algo:
function sortArrayAndGetMin(array) {
    // Initial checks are O(1) - constant time complexity
    if (!array.length) {
        throw new Error('array should not be empty');
    } else if (array.length === 1) {
        return array[0];
    } else {
        // The outer loop runs n times where n is the length of the array
        for (let i = 0; i < array.length; i++) {
            // O(n)
            let outerElement = array[i];
            // The inner loop runs (n - i) times for each iteration of the outer loop
            for (let j = i + 1; j < array.length; j++) {
                // O(n) for each i
                let innerElement = array[j];
                // Comparison and potential swap, constant time O(1)
                if (outerElement > innerElement) {
                    // swap
                    array[i] = innerElement;
                    array[j] = outerElement;
                    innerElement = array[j];
                    outerElement = array[i];
                }
            }
        }
        // Returning the first element after sorting, O(1)
        return array[0];
    }
}
const result = sortArrayAndGetMin([4, 3, 1, 5]);
console.log(result);

//! Detailed Time Complexity Analysis:
//? Initial Checks: The function begins with two conditional checks that are executed in constant time, O(1), as they do not depend on the size of the input array.

//? Outer Loop: The outer loop iterates over each element in the array, making its time complexity O(n), where n is the number of elements in the array.

//? Inner Loop: For each iteration of the outer loop, the inner loop runs (n - i) times. In the worst-case scenario (when the array is in reverse order), during the first iteration of the outer loop, the inner loop runs (n - 1) times, then (n - 2) times, and so on, down to 1. This creates a sum that can be approximated as n(n - 1)/2, which simplifies to O(n^2) in Big O notation.

//? Swap Operations: The swap operation inside the inner loop is executed in constant time, O(1), but since it could potentially happen in each iteration of the inner loop, it contributes to the overall O(n^2) complexity.

//? Return Statement: Finally, returning the first element of the array is done in constant time, O(1).

//! Conclusion
//? The time complexity of the sortArrayAndGetMin function is dominated by the nested loops, which give it a quadratic time complexity, O(n^2). This means that the execution time increases quadratically with the size of the input array. This is typical for simple sorting algorithms like bubble sort, which this function resembles by repeatedly swapping elements until the array is sorted.

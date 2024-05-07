function findMinNumber(array) {
    //? It does not depend on n(size of an arr). It will always run only once  -> O(1).
    if (!array.length) {
        throw new Error('array should not be empty');
    }
    //? It does not depend on n(size of an arr). It will always run only once  -> O(1).
    else if (array.length === 1) {
        return array[0];
    } else {
        let currentMin = array[0];
        //? It depends on n(size of an arr). The no. of operations depends on size of an arr -> O(n).
        for (let i = 1; i < array.length; i++) {
            if (array[i] < currentMin) {
                currentMin = array[i];
            }
        }
        return currentMin;
    }
}
// Best Case: O(n) - The best case occurs when the smallest element is the first element, but the algorithm still needs to check each element, resulting in linear time complexity.
// Worst Case: O(n) - The worst case also has a linear time complexity because the algorithm must check each element to find the minimum, regardless of the array's order.

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
// Best Case: O(n^2) - The best case occurs when the array is already sorted, but the algorithm still performs redundant comparisons, resulting in quadratic time complexity.
// Worst Case: O(n^2) - The worst case occurs when the array is sorted in reverse order, requiring the maximum number of swaps, but the time complexity remains quadratic due to the nested loops.

// Conclusion

// findMinNumber Algorithm: Both the best and worst-case scenarios result in a linear time complexity, O(n), because the algorithm must iterate through each element of the array exactly once to find the minimum value. This makes it efficient for finding the minimum value in an unsorted array.

// sortArrayAndGetMin Algorithm: Both the best and worst-case scenarios result in a quadratic time complexity, O(n^2), due to the nested loops that compare elements and potentially swap them to sort the array. This makes it less efficient for sorting and finding the minimum value in large arrays, as the time required grows quadratically with the size of the input array.

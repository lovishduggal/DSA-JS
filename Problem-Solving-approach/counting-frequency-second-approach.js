// Approach: 2
// [1,2,4,2] -> [1,4,4,16]
//{1:1,2:2,4:1}
//{1:1,4:2,16:1}

function countingFrequency(arr1, arr2) {
    const mapOfArr1 = {};
    const mapOfArr2 = {};

    // First for loop: O(n) where n is the length of arr1
    for (const key of arr1) {
        // Accessing and updating the map is O(1) for each key
        mapOfArr1[key] = (mapOfArr1[key] || 0) + 1;
    }

    // Second for loop: O(m) where m is the length of arr2
    for (const key of arr2) {
        // Accessing and updating the map is O(1) for each key
        mapOfArr2[key] = (mapOfArr2[key] || 0) + 1;
    }

    // Third loop: O(n) - iterating over keys in mapOfArr1
    for (const key in mapOfArr1) {
        // Accessing map values and comparison are O(1) operations
        console.log('Freq', mapOfArr1[key] === mapOfArr2[key * key]);
        // Checking if the frequency of the square of the key in arr1 matches the frequency in arr2
        if (!(mapOfArr1[key] === mapOfArr2[key * key])) return false;
    }

    // If all checks pass, return true
    return true;
}
const result = countingFrequency([1, 2, 4, 2], [1, 4, 4, 16]);
console.log(result);

// Time Complexity Analysis:

// First Loop (Over arr1): The first loop runs for each element in arr1, making its time complexity O(n), where n is the length of arr1.

// Second Loop (Over arr2): The second loop runs for each element in arr2, making its time complexity O(m), where m is the length of arr2.

// Third Loop (Over mapOfArr1 keys): The third loop iterates over the keys in mapOfArr1. The number of keys is at most n (the unique elements in arr1). Thus, this loop also has a time complexity of O(n).

// Conclusion:
// The overall time complexity of the countingFrequency function can be considered as O(n + m), where n is the length of arr1 and m is the length of arr2. This is because the first two loops are dependent on the lengths of the two input arrays respectively, and the third loop is dependent on the number of unique elements in arr1, which is at most n. This approach is more efficient than comparing each element of one array to every element of the other array, especially when the arrays contain a large number of elements.

function anagram(str1, str2) {
    // Initial length comparison: O(1) - constant time operation
    // This operation does not depend on the size of the input strings.
    if (str1.length !== str2.length) {
        return false;
    }

    const mappedOfStr1 = {};

    // First loop over str1: O(n) where n is the length of str1
    // This loop iterates over each character in str1, making its time complexity linear with respect to the length of str1.
    for (const val of str1) {
        // Accessing and updating the map is O(1) for each character
        // Each operation inside this loop (checking if a key exists and updating the map) is a constant time operation.
        mappedOfStr1[val] = (mappedOfStr1[val] || 0) + 1;
    }

    // Second loop over str2: O(m) where m is the length of str2
    // Similarly, this loop iterates over each character in str2, making its time complexity linear with respect to the length of str2.
    for (const val of str2) {
        // Checking if a character from str2 does not exist in the map or its count is zero, which would mean str2 is not an anagram of str1.
        if (!mappedOfStr1[val]) return false;
        // Decreasing the count of the character in the map, indicating that we have found a matching character in str2.
        mappedOfStr1[val] -= 1;
    }

    // Final return is O(1) - constant time operation
    // After successfully iterating over both strings without returning false, we conclude that str2 is an anagram of str1.
    return true;
}

const result = anagram('listen', 'silent');
console.log(result);

// Conclusion:

//The overall time complexity of the `anagram` function can be considered as O(n + m), where n is the length of `str1` and m is the length of `str2`. This analysis is based on the fact that the function iterates once over each string, performing constant time operations within each iteration. The initial length comparison and the final return statement are both constant time operations, O(1), and do not significantly affect the overall time complexity.

//This approach is efficient for checking if two strings are anagrams because it avoids nested loops, instead relying on a single pass over each string and using a hash map to track character frequencies. This method ensures that each character in `str1` has a corresponding character in `str2`, and vice versa, effectively confirming an anagram relationship between the two strings.

function anagram(str1, str2) {
    // Initial length comparison: O(1) - constant time operation
    if (str1.length !== str2.length) {
        return false;
    }

    const mappedOfStr1 = {};
    const mappedOfStr2 = {};

    // First loop over str1: O(n) where n is the length of str1
    for (const val of str1) {
        // Accessing and updating the map is O(1) for each character
        mappedOfStr1[val] = (mappedOfStr1[val] || 0) + 1;
    }

    // Second loop over str2: O(m) where m is the length of str2
    for (const val of str2) {
        // Accessing and updating the map is O(1) for each character
        mappedOfStr2[val] = (mappedOfStr2[val] || 0) + 1;
    }

    // Third loop over mappedOfStr1: O(n) - iterating over keys in mappedOfStr1
    for (const key in mappedOfStr1) {
        // Accessing map values and comparison are O(1) operations
        if (!mappedOfStr2[key]) return false; // Key existence check
        if (!(mappedOfStr1[key] === mappedOfStr2[key])) return false; // Value comparison
    }

    // Logging is O(1), but not considered in time complexity analysis
    console.log(mappedOfStr1, mappedOfStr2);
    return true; // Final return is O(1)
}

// Time Complexity Analysis:

// Initial Length Comparison:** The initial check to compare the lengths of `str1` and `str2` is a constant time operation, O(1), because it only involves comparing two numbers.

// First Loop (Over `str1`):** This loop has a time complexity of O(n), where n is the length of `str1`. Each operation inside the loop (checking and updating the map) is O(1), so the total time for this loop is proportional to the length of `str1`.

// Second Loop (Over `str2`):** Similarly, this loop has a time complexity of O(m), where m is the length of `str2`. Each operation inside the loop is also O(1), making the total time for this loop proportional to the length of `str2`.

// Third Loop (Over `mappedOfStr1` keys):** This loop iterates over the keys in `mappedOfStr1`, which are at most n (the number of unique characters in `str1`). Thus, this loop has a time complexity of O(n). Each check inside the loop is O(1).

// Conclusion:
//he overall time complexity of the `anagram` function can be considered as O(n + m), where n is the length of `str1` and m is the length of `str2`. This assumes that the lengths of `str1` and `str2` are similar, or that the difference between them is not significantly large, making the time complexity effectively O(n) for practical purposes where n is the length of the longer string. This analysis shows that the function is quite efficient for checking anagrams, as it avoids nested loops and relies on single-pass operations over each string and a direct comparison of their character frequencies.
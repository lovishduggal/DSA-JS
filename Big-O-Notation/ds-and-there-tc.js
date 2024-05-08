/* The commented section in the code is explaining the time complexity of various operations on an
array data structure in JavaScript. It discusses the time complexity of operations like accessing an
element by index, pushing elements to the end of the array, and unshifting elements to the beginning
of the array. */
// DATA STRUCTURES AND THEIR TIME COMPLEXITY

// JSON -> [{}]
// TIME COMPLEXITY OF AN ARRAY

// Example array of user objects
const users = [
    { email: 'lovishduggal11@gmail.com', name: 'lovish', age: 22 },
    { email: 'abc@codesikho.com', name: 'abac', age: 25 },
    { email: 'abc@sa.com', name: 'sdasx', age: 25 },
];

// Accessing an element in an array by index
const myUser1 = users[0]; // O(1)
//? Accessing an element by index is a constant time operation because it takes the same amount of time to retrieve an element, regardless of the array's size.

// Adding an element to the end of an array
users.push({ email: 'newlovishduggal11@gmail.com', name: 'newUser', age: 28 }); // O(1)
// [u1,u2,u3] -> [u1,u2,u3,u4]
//? Push operation has a time complexity of O(1) because adding an element to the end of an array does not require shifting any of the existing elements.

// Adding an element to the beginning of an array
users.unshift({
    email: 'newlovishduggal11@gmail.com',
    name: 'newUser',
    age: 28,
}); // O(n)
// [u1,u2,u3] -> [u4,u1,u2,u3]
//? Unshift operation has a time complexity of O(n) because it requires shifting all existing elements in the array to make space for the new first element.

// Conclusion:
// The time complexity of accessing an element in an array is O(1), which is highly efficient.
// Adding an element to the end of an array with the push method is also O(1), making it a fast operation.
// However, adding an element to the beginning of an array with the unshift method is O(n) because it requires shifting all existing elements. This operation becomes slower as the size of the array increases.
// Therefore, for operations that frequently add elements to an array, it is more efficient to add elements to the end rather than the beginning. This distinction is crucial for optimizing performance in applications that involve frequent modifications to arrays.

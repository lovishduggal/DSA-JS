//* Our first algorithm
//* [4,3,1,5] -> find the min number in the array.

//* Approach 1
//* Steps to solve this problem: Algorithm
// Step 1: First element should be treated as min number
// Step 2: Check if next number is min 3 < 4
// Step 3: i will pretend that min no is 3;
// Repeat the same step 2 and 3 till end of array
function findMinNumber(array) {
    if (!array.length) {
        throw new Error('array should not be empty');
    } else if (array.length === 1) {
        return array[0];
    } else {
        let currentMin = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] < currentMin) {
                currentMin = array[i];
            }
        }
        return currentMin;
    }
}
const result = findMinNumber([1, 2, 3, 4, 5]);
console.log(result);

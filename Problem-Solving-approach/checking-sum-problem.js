// Approach: 1
// checking sum zero
// [-5,-4,-3,-2,0,2,4,6,8] -> input
// [-4,4] -> output

function checkingSum(arr) {
    const pair = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (!(arr[i] + arr[j])) {
                pair.push(arr[i]);
                pair.push(arr[j]);
                break;
            }
        }
        if (pair.length > 0) {
            return pair;
        }
    }
    return false;
}
// The TC would be O(n^2): Quadratic TC
const result = checkingSum([-5, -4, -3, -2, 0, 1, 6, 7, 8]);
console.log(result);

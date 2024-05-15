// Approach: 2
// checking sum zero
// [-5,-4,-3,-2,0,2,4,6,8] -> input
// [-4,4] -> output

function checkingSum(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (true) {
        if (arr[left] === arr[right]) break;

        if (arr[left] + arr[right] === 0) {
            return [arr[left], arr[right]];
        }

        if (arr[left] + arr[right] > 0) right--;

        if (arr[left] + arr[right] < 0) left++;
    }

    return false;
}
// The TC would be O(n): Linear TC
const result = checkingSum([-5, -4, -3, -2, 0, 1, 6, 7, 8]);
console.log(result);

//* SECOND APPROACH
// [4,3,1,5] -> arrange it in ascending order -> [1,3,4,5];
// then access first element -> 1
// STEP 1: Check if first element is greater than second one
// is 4 > 3? ->yes -> swap them
// [3,4,1,5];
// now still compare 0th element with next (2nd element)
// 3 > 1 ? -> yes -> swap them
// Repeat these steps till end
function sortArrayAndGetMin(array) {
    if (!array.length) {
        throw new Error('array should not be empty');
    } else if (array.length === 1) {
        return array[0];
    } else {
        for (let i = 0; i < array.length; i++) {
            let outerElement = array[i];
            console.log(i, 'i', outerElement, 'outerElement');
            for (let j = i + 1; j < array.length; j++) {
                let innerElement = array[j];
                console.log(
                    j,
                    'j',
                    innerElement,
                    'innerElement',
                    outerElement,
                    'outerElement'
                );
                if (outerElement > innerElement) {
                    // swap
                    array[i] = innerElement;
                    array[j] = outerElement;
                    innerElement = array[j];
                    outerElement = array[i];
                }
            }
        }
        return array[0];
    }
}
const result = sortArrayAndGetMin([4, 3, 1, 5]);
console.log(result);
